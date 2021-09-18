import { observable, action } from 'mobx'

class CounterStore {
   @observable count = 0

   @action.bound
   incrementCounter(): void {
      this.count = this.count + 1
   }

   @action.bound
   decrementCounter(): void {
      this.count = this.count - 1
   }
}

export default CounterStore
