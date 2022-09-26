import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { unstable_convertLegacyJSONEditorState } from '@lexical/utils'
import React from 'react'
import { dataV2 } from './dataV2'
function Placeholder() {
   return <div className='editor-placeholder'>Enter some rich text...</div>
}

export const RichText = () => {
   const [editor] = useLexicalComposerContext()

   const parsed = unstable_convertLegacyJSONEditorState(editor, dataV2)
   console.log(parsed)

   return (
      <RichTextPlugin
         contentEditable={<ContentEditable className='editor-input px-4' />}
         placeholder={<Placeholder />}
         initialEditorState={parsed}
      />
   )
}
