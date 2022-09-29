import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { COMMAND_PRIORITY_HIGH, KEY_ENTER_COMMAND } from 'lexical'

import React, { useEffect } from 'react'

function CommandListener() {
   const [editor] = useLexicalComposerContext()

   function commandHandler(data) {
      console.log('TCL: commandListener -> data', data)
      return false
   }

   useEffect(
      () =>
         editor.registerCommand(
            KEY_ENTER_COMMAND,
            commandHandler,
            COMMAND_PRIORITY_HIGH
         ),
      []
   )
   return null
}

export default CommandListener
