import { TextNode } from 'lexical'
export class EmojiNode extends TextNode {
   __className: string

   static getType(): string {
      return 'emoticon'
   }

   static clone(node) {
      return new EmojiNode(node.__className, node.__text, node.__key)
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
   return node instanceof EmojiNode
}
export function $createEmoticonNode(className, emoticonText) {
   return new EmojiNode(className, emoticonText).setMode('token')
}
export function $createEmojiNode(className, emoticonText) {
   return new EmojiNode(className, emoticonText).setMode('token')
}
