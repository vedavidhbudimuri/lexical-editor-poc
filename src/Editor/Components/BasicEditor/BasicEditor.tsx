import './styles.css'

import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { HashtagNode } from '@lexical/hashtag'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { MarkNode } from '@lexical/mark'
import { OverflowNode } from '@lexical/overflow'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'
import { $getRoot, $getSelection } from 'lexical'
import React from 'react'

import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import EmoticonPlugin from '../Plugins/EmoticonPlugin'
import { EmojiNode } from '../Plugins/EmojiNode'
import ListMaxIndentLevelPlugin from './P/ListMaxIndentLevelPlugin'
import { PLAYGROUND_TRANSFORMERS } from './P/MarkdownTransformers'

const editorConfig = {
   namespace: 'MyEditor',
   onError(error) {
      throw error
   },
   nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      HashtagNode,
      CodeHighlightNode,
      AutoLinkNode,
      LinkNode,
      OverflowNode,
      HorizontalRuleNode,
      MarkNode,
      EmojiNode
   ]
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
      <div className='m-6 p-8'>
         <LexicalComposer initialConfig={editorConfig}>
            <div className='editor-container mt-8 '>
               <RichTextPlugin
                  initialEditorState={undefined}
                  contentEditable={
                     <div className='editor-scroller'>
                        <div className='editor'>
                           <ContentEditable
                              className={
                                 'prose block max-w-none flex-1 cursor-text resize-y overflow-auto p-2 text-sm outline-none'
                              }
                           />
                        </div>
                     </div>
                  }
                  placeholder={'Lexical Editor  '}
               />
               <OnChangePlugin onChange={onChange} />
               <HistoryPlugin />
               <EmoticonPlugin />
               <LinkPlugin />
               <ListPlugin />
               <MarkdownShortcutPlugin transformers={PLAYGROUND_TRANSFORMERS} />
               <ListMaxIndentLevelPlugin maxDepth={7} />
            </div>
         </LexicalComposer>
      </div>
   )
}
