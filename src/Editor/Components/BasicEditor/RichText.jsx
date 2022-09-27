import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { unstable_convertLegacyJSONEditorState } from '@lexical/utils'
import { toJS } from 'mobx'
import React, { useContext } from 'react'
import { EditorState } from 'lexical'

import { EditorStoreContext } from '../../../Common/stores/storesContext'

function Placeholder() {
   return <div className='editor-placeholder'>Enter some rich text...</div>
}

export const RichText = () => {
   const [editor] = useLexicalComposerContext()
   const { blocks, getEditorBlocks } = useContext(EditorStoreContext)
   const estate = {
      _nodeMap: getEditorBlocks()
   }
   const parsed = unstable_convertLegacyJSONEditorState(editor, estate)

   return (
      <RichTextPlugin
         contentEditable={<ContentEditable className='editor-input px-4' />}
         placeholder={<Placeholder />}
         initialEditorState={parsed}
      />
   )
}
