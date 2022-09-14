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

      // const removeTransformer2 = editor.registerDecoratorListener(props => {
      //    console.log('registerDecoratorListener', props)
      // })
      // const removeTransformer3 = editor.registerMutationListener(
      //    OutcomeNode,
      //    props => console.log('registerMutationListener', props)
      // )
      // const removeTransformer4 = editor.registerRootListener(props =>
      //    console.log('registerRootListener', props)
      // )
      // const removeTransformer5 = editor.registerTextContentListener(props =>
      //    console.log('registerTextContentListener', props)
      // )
      // const removeTransformer6 = editor.registerUpdateListener(props =>
      //    console.log('registerUpdateListener', props)
      // )

      return () => {
         removeTransformer()
         // removeTransformer2()
         // removeTransformer3()
         // removeTransformer4()
         // removeTransformer5()
         // removeTransformer6()
      }
   }, [])
   return null
}

export default OutcomeEditWatcherPlugin
