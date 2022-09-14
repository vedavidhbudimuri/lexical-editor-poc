import {
   LexicalComposerContext,
   useLexicalComposerContext
} from '@lexical/react/LexicalComposerContext'
import React, { useEffect } from 'react'

function UpdatePlugin() {
   const [editor] = useLexicalComposerContext()

   useEffect(
      () =>
         editor.registerUpdateListener(props => {
            console.log(props)
         }),
      []
   )

   return null
}

export default UpdatePlugin
