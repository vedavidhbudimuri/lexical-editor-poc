import { action, observable, ObservableMap } from 'mobx'
import BlockModel from '../../Models/BlockModel'

class EditorStore {
   @observable state!: string
   @observable blocks!: ObservableMap
   @observable rootBlockId: string
   constructor() {
      this.state = ''
      this.blocks = new ObservableMap()
      this.rootBlockId = ''
   }
   @action.bound
   setBlocks = blocks => {
      blocks.map(block => new BlockModel(block))
   }
}
export default EditorStore
