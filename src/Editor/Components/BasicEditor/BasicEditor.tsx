import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { $getRoot, $getSelection } from 'lexical'
import React from 'react'

import { EmojiNode } from '../Plugins/EmojiNode'
import EmoticonPlugin from '../Plugins/EmoticonPlugin'
import TreeViewPlugin from '../Plugins/TreeViewPlugin'
import './styles.css'

const editorConfig = {
   onError(error) {
      throw error
   },
   nodes: [EmojiNode],
   namespace: 'Lex Editor'
}

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState) {
   editorState.read(() => {
      // Read the contents of the EditorState here.
      const root = $getRoot()
      const selection = $getSelection()

      console.log(root, selection)
   })
}

export default function Editor() {
   return (
      <LexicalComposer initialConfig={editorConfig}>
         <div className='editor-container'>
            <PlainTextPlugin
               contentEditable={<ContentEditable className='editor-input' />}
               placeholder={<Placeholder />}
            />
            <OnChangePlugin onChange={onChange} />
            <HistoryPlugin />
            <TreeViewPlugin />
            <EmoticonPlugin />
         </div>
      </LexicalComposer>
   )
}

function Placeholder() {
   return <div className='editor-placeholder'>Enter some plain text...</div>
}
