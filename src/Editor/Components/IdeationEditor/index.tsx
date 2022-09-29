import './styles.css'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import React from 'react'

import OutcomeNode from './OutcomeNode'
import OutcomePlugin from './OutcomePlugin'
import CommandListener from './Plugins/CommandListener'

const editorConfig = {
   onError(error) {
      console.log(error)
   },
   nodes: [OutcomeNode],
   namespace: 'IdeationEditor'
}

function IdeationEditor() {
   return (
      <div>
         <LexicalComposer initialConfig={editorConfig}>
            <div className='p-8 m-8 '>
               <RichTextPlugin
                  contentEditable={
                     <ContentEditable
                        className={
                           'prose bg-gray-200 block max-w-none flex-1 cursor-text resize-y overflow-auto p-2 text-sm outline-none border-1 border-solid border-green-300'
                        }
                     />
                  }
                  placeholder={'Create Outcomes'}
               />
               <OutcomePlugin />
               <CommandListener />
               <HistoryPlugin />
            </div>
         </LexicalComposer>
      </div>
   )
}
export default IdeationEditor
