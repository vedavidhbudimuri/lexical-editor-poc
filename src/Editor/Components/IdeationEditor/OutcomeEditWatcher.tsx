import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { TextNode } from 'lexical'
import React, { useEffect } from 'react'
import OutcomeNode from './OutcomeNode'

function OutcomeEditWatcherPlugin() {
   const [editor] = useLexicalComposerContext()

   const updateOutcomeInStore = node => {
      console.log('registerNodeTransform', node)

      // get the store from context
      // find the node with id
      // update the node data including the text with node.getTextContent()
   }

   useEffect(() => {
      const removeTransformer = editor.registerNodeTransform(
         OutcomeNode,
         updateOutcomeInStore
      )

      return () => {
         removeTransformer()
      }
   }, [])
   return null
}

export default OutcomeEditWatcherPlugin
