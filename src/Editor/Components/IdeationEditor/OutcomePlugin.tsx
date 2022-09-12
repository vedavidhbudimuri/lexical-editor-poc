import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { TextNode } from 'lexical'
import React, { useEffect } from 'react'
import { $createOutcomeNode } from './OutcomeNode'

function outcomeTransform(node) {
   const textContext = node.getTextContent()
   if (textContext === '>o ' || textContext === '>O ') {
      node.replace($createOutcomeNode('🏳️'))
   }
}

export default function OutcomePlugin() {
   const [editor] = useLexicalComposerContext()
   useEffect(() => {
      const removeTransformer = editor.registerNodeTransform(
         TextNode,
         outcomeTransform
      )
      return () => {
         removeTransformer()
      }
   }, [])

   return null
}
