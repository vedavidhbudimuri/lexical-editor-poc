import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { HashtagNode } from '@lexical/hashtag'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { MarkNode } from '@lexical/mark'
import { $convertFromMarkdownString, TRANSFORMERS } from '@lexical/markdown'
import { OverflowNode } from '@lexical/overflow'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'
import { Klass, LexicalNode } from 'lexical'
import React from 'react'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import ListMaxIndentLevelPlugin from '../Plugins/ListMaxIndentLevelPlugin'
import CodeHighlight from '../Plugins/CodeHighlightPlugin'

import { EmojiNode } from '../Plugins/EmojiNode'
import { EditorContainer } from '../styledComponents'
import HorizontalRulePlugin from '../Plugins/HorizontalRulePlugin'

const PlaygroundNodes: Array<Klass<LexicalNode>> = [
   HeadingNode,
   ListNode,
   ListItemNode,
   QuoteNode,
   CodeNode,
   TableNode,
   TableCellNode,
   TableRowNode,
   HashtagNode,
   CodeHighlightNode,
   AutoLinkNode,
   LinkNode,
   OverflowNode,
   EmojiNode,
   HorizontalRuleNode,
   MarkNode
]

function MarkdownEditor() {
   return (
      <EditorContainer>
         <LexicalComposer
            initialConfig={{
               namespace: 'Markdown Editor',
               onError: err => {
                  console.log(err)
               },
               nodes: PlaygroundNodes
            }}
         >
            <RichTextPlugin
               placeholder={'enter markdown'}
               contentEditable={<ContentEditable className='min-h-32' />}
            />
            {/* <CodeHighlight /> */}
            {/* <ListPlugin />
            <LinkPlugin /> */}
            {/* <HorizontalRulePlugin /> */}
            {/* <ListMaxIndentLevelPlugin maxDepth={7} /> */}
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
         </LexicalComposer>
      </EditorContainer>
   )
}

export default MarkdownEditor
