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
        console.log(payload);
        console.log(res);

        // if(res.response == "Phone or Password is incorrect") {
        //     Notification({ text: "Phone or Password is incorrect !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        // }else if(res.message == "User logged in successfully"){
        //     localStorage.setItem("access_token", res?.access_token);
        //     localStorage.setItem("refresh_token", res?.refresh_token);
        //     Notification({ text: "Successful logged in!!!" }, { type: "success" }, { time: "3500" }, { description: "" });
        //     router.push({ name: "statistics" })
        // }
      } catch (err) {
        console.log(err);
        if(err.response?.message == "user not found") {
            Notification({ text: "User not found !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }else {
          Notification({ text: "Oops! Something went wrong. !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }
        // Notification({ text: "User not found !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });

      }
    },
  }
})
