import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { LexicalEditor, TextNode } from 'lexical'
import React, { useEffect } from 'react'
import { $createEmoticonNode } from './EmojiNode'

function emoticonTransform(node) {
   const textContent = node.getTextContent()
   if (textContent === ':)') {
      node.replace($createEmoticonNode('', '🙂'))
   } else if (textContent === ':D') node.replace($createEmoticonNode('', '😮'))
}

function useEmoticons(editor: LexicalEditor) {
   useEffect(() => {
      const removeTransform = editor.registerNodeTransform(
         TextNode,
         emoticonTransform
      )
      return () => {
         removeTransform()
      }
   }, [])
}

export default function EmoticonPlugin() {
   const [editor] = useLexicalComposerContext()
   useEmoticons(editor)
   return null
}
