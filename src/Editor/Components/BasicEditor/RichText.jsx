import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { unstable_convertLegacyJSONEditorState } from '@lexical/utils'
import { dataV2 } from './dataV2'
import React from 'react'
function Placeholder() {
   return <div className='editor-placeholder'>Enter some rich text...</div>
}

export const RichText = () => {
   const [editor] = useLexicalComposerContext()

   const parsed = unstable_convertLegacyJSONEditorState(editor, dataV2)
   console.log(parsed)

   return (
      <RichTextPlugin
         contentEditable={<ContentEditable className='editor-input' />}
         placeholder={<Placeholder />}
         initialEditorState={parsed}
      />
   )
}
