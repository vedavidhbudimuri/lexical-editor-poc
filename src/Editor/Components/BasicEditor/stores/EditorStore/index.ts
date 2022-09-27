import { action, observable, ObservableMap } from 'mobx'
import BlockModel from '../../Models/BlockModel'
import { initialEditorState } from './initialState'

class EditorStore {
   @observable state!: string
   @observable blocks!: ObservableMap
   @observable rootBlockId = 'root'
   constructor() {
      this.state = ''
      this.blocks = new ObservableMap()
      this.initBlocks()
   }

   @action.bound
   initBlocks() {
      this.createAndAddBlocks(initialEditorState)
   }

   @action.bound
   createAndAddBlocks(blocks: any[]) {
      blocks.forEach(block => {
         const bModel = new BlockModel(block)
         this.blocks.set(bModel.id, bModel)
      })
   }

   @action.bound
   updateBlocks = (blocks: any[]) => {
      this.createAndAddBlocks(blocks)
   }

   getEditorBlocks = () => {
      const entries = Array.from(this.blocks.entries())
      const nodes = entries.map(item => {
         return [item[0], { ...item[1].data }]
      })
      return nodes
   }
}
export default EditorStore
