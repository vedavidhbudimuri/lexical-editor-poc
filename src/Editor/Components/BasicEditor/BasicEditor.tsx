import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { ListItemNode, ListNode } from '@lexical/list'
import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { TRANSFORMERS } from '@lexical/markdown'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'

import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin'
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import AutoLinkPlugin from './plugins/AutoLinkPlugin'
import React from 'react'
import './styles.css'
import { RichText } from './RichText'

const editorConfig = {
   namespace: 'basic editor',
   // The editor theme
   // Handling of errors during update
   onError(error) {
      throw error
   },
   // Any custom nodes go here
   nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      AutoLinkNode,
      LinkNode
   ]
}

const onChange = editorState => {
   console.log(JSON.stringify(editorState.toJSON()))
}

export default function BasicEditor() {
   return (
      <LexicalComposer initialConfig={editorConfig}>
         <div className='editor-container'>
            <ToolbarPlugin />
            <div className='editor-inner'>
               <RichText />
               <OnChangePlugin onChange={onChange} />
               <HistoryPlugin />
               <AutoFocusPlugin />
               <CodeHighlightPlugin />
               <ListPlugin />
               <LinkPlugin />
               <AutoLinkPlugin />
               <ListMaxIndentLevelPlugin maxDepth={7} />
               <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            </div>
         </div>
      </LexicalComposer>
   )
}
