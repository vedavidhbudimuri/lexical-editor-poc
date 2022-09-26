import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { ListItemNode, ListNode } from '@lexical/list'
import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { TRANSFORMERS } from '@lexical/markdown'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'

import React, { useState } from 'react'
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin'
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import AutoLinkPlugin from './plugins/AutoLinkPlugin'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import './styles.css'
import { RichText } from './RichText'
import DraggableBlockPlugin from './plugins/DraggableBlockPlugin'

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
   const [
      floatingAnchorElem,
      setFloatingAnchorElem
   ] = useState<HTMLDivElement | null>(null)

   const onRef = (_floatingAnchorElem: HTMLDivElement) => {
      if (_floatingAnchorElem !== null) {
         setFloatingAnchorElem(_floatingAnchorElem)
      }
   }
   return (
      <LexicalComposer initialConfig={editorConfig}>
         <div className='editor-container'>
            <ToolbarPlugin />
            <div className='m-4 editor-inner'>
               <div ref={onRef}>
                  <RichText />
               </div>
               <OnChangePlugin onChange={onChange} />
               <HistoryPlugin />
               <AutoFocusPlugin />
               <CodeHighlightPlugin />
               <ListPlugin />
               <LinkPlugin />
               <AutoLinkPlugin />
               <ListMaxIndentLevelPlugin maxDepth={7} />
               <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
               {floatingAnchorElem && (
                  <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
               )}
            </div>
         </div>
      </LexicalComposer>
   )
}
