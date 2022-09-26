import { observable } from 'mobx'

class BlockModel {
   @observable data: string
   @observable children: string[]
   constructor(data: string, children = []) {
      this.data = data
      this.children = []
   }
}
export default BlockModel
