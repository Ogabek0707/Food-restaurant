import { defineStore } from 'pinia'
import contactApi from '../api/contact'
import Notification from '../plugins/Notification'
import router from '@/router'

export const useContactStore = defineStore('contact', {
  state: () => ({
    
  }),

  actions: {
    async ContactAdd(payload) {
      try {
        const res = await contactApi.Add(payload)
        console.log(res);
        if(res.name) {
            Notification({ text: "Thank you for reaching out to us! " }, { type: "success" }, { time: "5000" }, { description: "We have received your message and our team will get back to you within 24 hours." });
            setTimeout(() => {
              location.reload()
            }, 5000);
        }else if(res.message == "User logged in successfully"){
            Notification({ text: "Oops! Something went wrong. !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }
      } catch (err) {
        console.log(err);
        if(err.response?.message == "user not found") {
            Notification({ text: "User not found !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }else {
          Notification({ text: "Oops! Something went wrong !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }
        // Notification({ text: "User not found !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });

      }
    },
  }
})
