import { defineStore } from 'pinia'
import contactApi from '../api/contact'
import Notification from '../plugins/Notification'
import router from '@/router'
import authApi from '@/api/auth/AuthApi'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    
  }),

  actions: {
    async Login(payload) {
      try {
        const res = await authApi.Login(payload)
        console.log(res);
        // if(res.name) {
        //     Notification({ text: "Thank you for reaching out to us! " }, { type: "success" }, { time: "5000" }, { description: "We have received your message and our team will get back to you within 24 hours." });
        //     setTimeout(() => {
        //       location.reload()
        //     }, 5000);
        // }else if(res.message == "User logged in successfully"){
        //     Notification({ text: "Oops! Something went wrong. !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        // }
      } catch (err) {
        console.log(err);
        if(err.response?.data.detail == "No active account found with the given credentials") {
            Notification({ text: "User not found !!!" }, { type: "danger" }, { time: "3500" }, { description: "Please register!" });
            setTimeout(() => {
                router.push({name: "register"})
            }, 3500);
        }else {
          Notification({ text: "Oops! Something went wrong !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }

      }
    },
    async Register(payload) {
      try {
        const res = await authApi.Register(payload)
        console.log(res);
        if(res.tokens?.access) {
            Notification({ text: "You have successfully registered. " }, { type: "success" }, { time: "3500" }, { description: "" });
            localStorage.setItem("access_token", res?.tokens?.access);
            setTimeout(() => {
              router.push({name: 'home'})
            }, 3500);
        }else if(res.message == "User logged in successfully"){
            Notification({ text: "Oops! Something went wrong. !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }
      } catch (err) {
        console.log(err);
        if(err.response?.data.username == "user with this phone already exists.") {
            Notification({ text: "You are already registered !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
            setTimeout(() => {
                router.push({name: "login"})
            }, 3500);
        }else {
          Notification({ text: "Oops! Something went wrong !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }

      }
    },
  }
})
