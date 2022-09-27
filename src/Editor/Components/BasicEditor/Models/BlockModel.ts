import { observable } from 'mobx'

class BlockModel {
   @observable data: Record<string, any>
   id
   constructor(data: Record<string, any>) {
      this.id = data.__key
      this.data = data
   }
}

export default BlockModel
