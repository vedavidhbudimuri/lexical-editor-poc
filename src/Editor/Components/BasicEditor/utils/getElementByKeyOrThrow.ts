import { LexicalEditor, NodeKey } from 'lexical'

export default function invariant(
   cond?: boolean,
   message?: string,
   ...args: string[]
): asserts cond {
   if (cond) {
      return
   }

   throw new Error(
      'Internal Lexical error: invariant() is meant to be replaced at compile ' +
         'time. There is no runtime version.'
   )
}

export function getElementByKeyOrThrow(
   editor: LexicalEditor,
   key: NodeKey
): HTMLElement {
   const element = editor._keyToDOMMap.get(key)

   if (element === undefined) {
      invariant(
         false,
         'Reconciliation: could not find DOM element for node key %s',
         key
      )
   }

   return element
}
