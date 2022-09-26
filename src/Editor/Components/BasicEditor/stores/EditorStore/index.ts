import { observable } from 'mobx'

class EditorStore {
   @observable state!: string
   constructor() {
      this.state = ''
   }
}
export default EditorStore
