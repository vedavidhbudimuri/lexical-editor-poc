import { TextNode } from 'lexical'
export class EmoticonNode extends TextNode {
   __className: string

   static getType(): string {
      return 'emoticon'
   }

   static clone(node) {
      return new EmoticonNode(node.__className, node.__text, node.__key)
   }

   constructor(className, text, key?) {
      super(text, key)
      this.__className = className
   }

   createDOM(config) {
      const dom = super.createDOM(config)
      dom.className = this.__className
      console.log('TCL: EmoticonNode -> createDOM -> dom', dom)
      return dom
   }
}

export function $isEmoticonNode(node) {
   return node instanceof EmoticonNode
}
export function $createEmoticonNode(className, emoticonText) {
   return new EmoticonNode(className, emoticonText).setMode('token')
}
export function $createEmojiNode(className, emoticonText) {
   return new EmoticonNode(className, emoticonText).setMode('token')
}
