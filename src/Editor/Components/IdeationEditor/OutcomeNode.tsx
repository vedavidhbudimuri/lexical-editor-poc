import { TextNode } from 'lexical'
import React, { Component } from 'react'

export default class OutcomeNode extends TextNode {
   static getType() {
      return 'OUTCOME_NODE'
   }

   static clone(node: OutcomeNode) {
      return new OutcomeNode(node.__text, node.__key)
   }

   constructor(text, key?) {
      super(text, key)
   }

   createDOM(config) {
      const ui = super.createDOM(config)
      ui.className = 'outcome-node'
      return ui
   }
}

export function $isOutcomeNode(node) {
   return node instanceof OutcomeNode
}
export function $createOutcomeNode(text, key?) {
   return new OutcomeNode(text, key)
}
