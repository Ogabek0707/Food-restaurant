import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  {
    state: () => ({
      cart: []
    }),
    actions: {
      count(item) {
        this.cart.push(item)
        console.log(item);
        // localStorage.setItem("selectedFood", `${this.cart}`)
        setTimeout(() => {
          console.log(this.cart.length);
        }, 1000);
      }
      
    }
  }
)
