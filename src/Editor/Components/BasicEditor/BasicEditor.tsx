import './styles.css'

import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import {
   TRANSFORMERS,
   CHECK_LIST,
   ELEMENT_TRANSFORMERS,
   TEXT_FORMAT_TRANSFORMERS,
   TEXT_MATCH_TRANSFORMERS
} from '@lexical/markdown'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { EditorState, NodeKey } from 'lexical'
import { IntentionallyMarkedAsDirtyElement } from 'lexical/LexicalEditor'
import React, { useContext, useEffect, useState } from 'react'

import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { EditorStoreContext } from '../../../Common/stores/storesContext'
import AutoLinkPlugin from './plugins/AutoLinkPlugin'
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import DraggableBlockPlugin from './plugins/DraggableBlockPlugin'
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin'
import ToolbarPlugin from './plugins/ToolbarPlugin'

import { LinkPlugin } from './plugins/LexicalLinkPlugin'
import theme from './theme/EditorTheme'
import FloatingLinkEditorPlugin from './plugins/FloatingLinkEditorPlugin'

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
   ],
   theme: theme
}

function OnChangeEditorStatePlugin() {
   const { updateBlocks } = useContext(EditorStoreContext)
   const [editorState] = useLexicalComposerContext()

   useEffect(() => {
      const registerFn = editorState.registerUpdateListener(
         (state: {
            dirtyElements: Map<NodeKey, IntentionallyMarkedAsDirtyElement>
            dirtyLeaves: Set<NodeKey>
            editorState: EditorState
            normalizedNodes: Set<NodeKey>
            prevEditorState: EditorState
            tags: Set<string>
         }) => {
            const nodes: any[] = []
            Array.from(state.dirtyElements.keys()).forEach(id => {
               const node = state.editorState._nodeMap.get(id)
               node && nodes.push(node)
            })

            if (nodes.length) updateBlocks(nodes)
         }
      )

      return () => {
         registerFn()
      }
   }, [])

   const onChange = (editorState: EditorState) => {
      const nodes = editorState._nodeMap
      console.log('TCL: onChange -> nodes', nodes)
   }
   return <OnChangePlugin onChange={onChange} />
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
                  <RichTextPlugin
                     contentEditable={
                        <ContentEditable className='editor-input px-4' />
                     }
                     placeholder={'Enter the text...'}
                  />
               </div>
               <OnChangeEditorStatePlugin />
               <HistoryPlugin />
               <AutoFocusPlugin />
               <CodeHighlightPlugin />
               <ListPlugin />
               <LinkPlugin />
               <AutoLinkPlugin />
               <ListMaxIndentLevelPlugin maxDepth={7} />
               <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
               {floatingAnchorElem && (
                  <>
                     <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
                     <FloatingLinkEditorPlugin
                        anchorElem={floatingAnchorElem}
                     />
                  </>
               )}
            </div>
         </div>
      </LexicalComposer>
   )
}
