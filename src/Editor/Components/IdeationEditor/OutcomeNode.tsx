import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { Popover, Typography } from '@mui/material'
import { DecoratorNode, ElementNode, TextNode } from 'lexical'
import React, { Component, useState } from 'react'

function OutcomeComponent() {
   const [text, setText] = useState('')

   const [isOpen, setIsOpen] = useState(false)
   const onClickIcon = () => {
      setIsOpen(true)
   }
   const onClickBtn = btn => {
      console.log(btn)
   }
   const anchorEle = () => {
      console.log('first')
      return document.getElementById('outcome-span') as HTMLElement
   }

   return (
      <span
         contentEditable
         className={'outline-none'}
         id='outcome-span'
         onChange={e => console.log(e)}
      >
         <span className='cursor-pointer outline-none' onClick={onClickIcon}>
            🏳️
         </span>
         outcome
         <Popover
            id={'123'}
            open={isOpen}
            anchorEl={anchorEle}
            onClose={() => setIsOpen(false)}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left'
            }}
         >
            <div className='flex flex-col justify-center items-center h-32 w-26 p-4'>
               <button
                  className='m-2 flex justify-center items-center'
                  onClick={() => onClickBtn('🔄')}
               >
                  🔄 Sync
               </button>
               <button
                  className='m-2 flex justify-center items-center'
                  onClick={() => onClickBtn('Copy')}
               >
                  📋 Copy
               </button>
               <button
                  className='m-2 flex justify-center items-center'
                  onClick={() => onClickBtn('Duplicate')}
               >
                  ↩️ Duplicate
               </button>
            </div>
         </Popover>
      </span>
   )
}

export default class OutcomeNode extends DecoratorNode<JSX.Element> {
   static getType() {
      return 'OUTCOME_NODE'
   }

   static clone(node: OutcomeNode) {
      return new OutcomeNode(node.__text, node.__key)
   }

   constructor(text, key?) {
      super(key)
   }
   getType() {
      return 'OUTCOME_NODE'
   }

   createDOM(config) {
      const ele = document.createElement('span')
      return ele
   }

   decorate(): JSX.Element {
      return <OutcomeComponent />
   }
}

export function $isOutcomeNode(node) {
   return node instanceof OutcomeNode
}
export function $createOutcomeNode(text, key?) {
   return new OutcomeNode(text, key)
}
