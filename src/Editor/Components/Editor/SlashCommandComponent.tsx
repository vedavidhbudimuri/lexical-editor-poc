import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { COMMAND_PRIORITY_LOW, createCommand, LexicalCommand } from 'lexical'
import React, { useEffect } from 'react'

interface Props {}

const ON_PRESS_SLASH_COMMAND: LexicalCommand<string> = createCommand()

function SlashCommandComponent(props: Props) {
   const [editor] = useLexicalComposerContext()

   const registerCommand = () => {
      editor.registerCommand(
         ON_PRESS_SLASH_COMMAND,
         (payload: string) => {
            console.log(payload) // Hello World!
            return false
         },
         COMMAND_PRIORITY_LOW
      )
   }

   useEffect(() => {
      registerCommand()
   }, [])

   return null
}

export default SlashCommandComponent
