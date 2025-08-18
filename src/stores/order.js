import { defineStore } from 'pinia'
import Notification from '../plugins/Notification'
import router from '@/router'
import orderApi from '@/api/order'

export const useOrderStore = defineStore('order', {
  state: () => ({
    
  }),

  actions: {
    async createOrder(payload) {
      try {
        const res = await orderApi.Order(payload)
        console.log(res);
        if(res.id) {
            Notification({ text: "Your order has been received. " }, { type: "success" }, { time: "5000" }, { description: "We will deliver it shortly." });
            setTimeout(() => {
                router.push({name: "home"})
              location.reload()
            }, 5000);
        }else {
            Notification({ text: "Oops! Something went wrong. !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }
      } catch (err) {
        console.log(err);
        if(err.response?.data.detail == "Authentication credentials were not provided.") {
            Notification({ text: "Authentication credentials were not provided." }, { type: "danger" }, { time: "3500" }, { description: "" });
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            localStorage.removeItem("username");
            window.location.href = "/login";
            setTimeout(() => {
                location.reload()
            }, 1000);
        }else {
          Notification({ text: "Oops! Something went wrong !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }
        // Notification({ text: "Oops! Something went wrong !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });

      }
    },
  }
})
