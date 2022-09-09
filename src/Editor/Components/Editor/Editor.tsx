import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import LexicalMarkdownShortcutPlugin from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { $getRoot, $getSelection, createCommand, LexicalCommand } from 'lexical'
import React, { useEffect } from 'react'
import { editorTheme } from './constants'

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState) {
   editorState.read(() => {
      // Read the contents of the EditorState here.
      const root = $getRoot()
      const selection = $getSelection()

      console.log(editorState)
   })
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
   const [editor] = useLexicalComposerContext()

   useEffect(() => {
      // Focus the editor when the effect fires!
      editor.focus()
   }, [editor])

   return null
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
   console.error(error)
}

function Editor() {
   const initialConfig = {
      namespace: 'MyEditor',
      theme: editorTheme,
      onError
   }

   return (
      <LexicalComposer initialConfig={initialConfig}>
         <PlainTextPlugin
            contentEditable={<ContentEditable />}
            placeholder={<div>Enter some text...</div>}
         />
         <OnChangePlugin onChange={onChange} />
         <HistoryPlugin />
         <MyCustomAutoFocusPlugin />
         {/* <LexicalMarkdownShortcutPlugin /> */}
      </LexicalComposer>
   )
}

export default Editor
