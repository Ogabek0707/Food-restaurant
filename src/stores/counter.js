import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  {
    state: () => ({
      cart: 0
    }),
    actions: {
      count() {
        this.cart += 1
        console.log(this.cart);
      }
    }
  }
)
