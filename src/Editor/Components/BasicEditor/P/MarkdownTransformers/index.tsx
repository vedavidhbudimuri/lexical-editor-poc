import {
   CHECK_LIST,
   ELEMENT_TRANSFORMERS,
   TEXT_FORMAT_TRANSFORMERS,
   TEXT_MATCH_TRANSFORMERS,
   TRANSFORMERS,
   HEADING,
   UNORDERED_LIST,
   INLINE_CODE,
   ORDERED_LIST
} from '@lexical/markdown'
import {
   $createHorizontalRuleNode,
   $isHorizontalRuleNode,
   HorizontalRuleNode
} from '@lexical/react/LexicalHorizontalRuleNode'
import {
   $createTableCellNode,
   $createTableNode,
   $createTableRowNode,
   $isTableNode,
   $isTableRowNode,
   TableCellHeaderStates,
   TableCellNode,
   TableNode,
   TableRowNode
} from '@lexical/table'
import {
   $createParagraphNode,
   $createTextNode,
   $isElementNode,
   $isParagraphNode,
   $isTextNode
} from 'lexical'

export const HR = {
   dependencies: [HorizontalRuleNode],
   export: node => {
      console.log('first')
      return $isHorizontalRuleNode(node) ? '***' : null
   },
   regExp: /^(---|\*\*\*|___)\s?$/,
   replace: (parentNode, _1, _2, isImport) => {
      const line = $createHorizontalRuleNode()

      // TODO: Get rid of isImport flag
      if (isImport || parentNode.getNextSibling() != null) {
         parentNode.replace(line)
      } else {
         parentNode.insertBefore(line)
      }

      line.selectNext()
   },
   type: 'element'
}

// Very primitive table setup
const TABLE_ROW_REG_EXP = /^(?:\|)(.+)(?:\|)\s?$/

export const TABLE = {
   // TODO: refactor transformer for new TableNode
   dependencies: [TableNode, TableRowNode, TableCellNode],
   export: (node, exportChildren: (elementNode) => string) => {
      if (!$isTableNode(node)) {
         return null
      }

      const output: any = []

      for (const row of node.getChildren()) {
         const rowOutput: any = []

         if ($isTableRowNode(row)) {
            for (const cell of row.getChildren()) {
               // It's TableCellNode (hence ElementNode) so it's just to make flow happy
               if ($isElementNode(cell)) {
                  rowOutput.push(exportChildren(cell))
               }
            }
         }

         output.push(`| ${rowOutput.join(' | ')} |`)
      }

      return output.join('\n')
   },
   regExp: TABLE_ROW_REG_EXP,
   replace: (parentNode, _1, match) => {
      const matchCells = mapToTableCells(match[0])

      if (matchCells == null) {
         return
      }

      const rows = [matchCells]
      let sibling = parentNode.getPreviousSibling()
      let maxCells = matchCells.length

      while (sibling) {
         if (!$isParagraphNode(sibling)) {
            break
         }

         if (sibling.getChildrenSize() !== 1) {
            break
         }

         const firstChild = sibling.getFirstChild()

         if (!$isTextNode(firstChild)) {
            break
         }

         const cells = mapToTableCells(firstChild.getTextContent())

         if (cells == null) {
            break
         }

         maxCells = Math.max(maxCells, cells.length)
         rows.unshift(cells)
         const previousSibling = sibling.getPreviousSibling()
         sibling.remove()
         sibling = previousSibling
      }

      const table = $createTableNode()

      for (const cells of rows) {
         const tableRow = $createTableRowNode()
         table.append(tableRow)

         for (let i = 0; i < maxCells; i++) {
            tableRow.append(i < cells.length ? cells[i] : createTableCell(null))
         }
      }

      const previousSibling = parentNode.getPreviousSibling()
      if (
         $isTableNode(previousSibling) &&
         getTableColumnsSize(previousSibling) === maxCells
      ) {
         previousSibling.append(...table.getChildren())
         parentNode.remove()
      } else {
         parentNode.replace(table)
      }

      table.selectEnd()
   },
   type: 'element'
}

function getTableColumnsSize(table: TableNode) {
   const row = table.getFirstChild()
   return $isTableRowNode(row) ? row.getChildrenSize() : 0
}

const createTableCell = (
   textContent: string | null | undefined
): TableCellNode => {
   const cell = $createTableCellNode(TableCellHeaderStates.NO_STATUS)
   const paragraph = $createParagraphNode()

   if (textContent != null) {
      paragraph.append($createTextNode(textContent.trim()))
   }

   cell.append(paragraph)
   return cell
}

const mapToTableCells = (textContent: string): Array<TableCellNode> | null => {
   // TODO:
   // For now plain text, single node. Can be expanded to more complex content
   // including formatted text
   const match = textContent.match(TABLE_ROW_REG_EXP)

   if (!match || !match[1]) {
      return null
   }

   return match[1].split('|').map(text => createTableCell(text))
}

export const PLAYGROUND_TRANSFORMERS = [
   TABLE,
   HR,
   CHECK_LIST,
   ...ELEMENT_TRANSFORMERS,
   ...TEXT_FORMAT_TRANSFORMERS,
   ...TEXT_MATCH_TRANSFORMERS,
   ...TRANSFORMERS,
   HEADING
]
