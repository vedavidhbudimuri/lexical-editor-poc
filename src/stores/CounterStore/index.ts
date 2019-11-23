import { observable, action } from 'mobx'

class CounterStore {
   @observable count: number = 0

   @action.bound
   incrementCounter() {
      this.count = this.count + 1
   }

   @action.bound
   decrementCounter() {
      this.count = this.count - 1
   }
}

export default CounterStore
