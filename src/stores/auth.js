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
        localStorage.setItem("username", payload.username)
        // localStorage.setItem("phone", payload.phone)
        console.log(res);
        if(res?.access) {
            Notification({ text: "Successfully logged in " }, { type: "success" }, { time: "3500" }, { description: "" });
            localStorage.setItem("access", res?.access);
            localStorage.setItem("refresh", res?.refresh);
            setTimeout(() => {
                router.push({name: "home"})
            }, 3000);
            setTimeout(() => {
                location.reload()
            }, 3700);
        }else if(res.message == "User logged in successfully"){
            // Notification({ text: "Oops! Something went wrong. !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }
      } catch (err) {
        console.log(err);
        if(err.response?.data.detail == "No active account found with the given credentials") {
            Notification({ text: "User not found !!!" }, { type: "danger" }, { time: "3500" }, { description: "Please register!" });
            localStorage.removeItem("username")
            localStorage.removeItem("phone")
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
            localStorage.setItem("access", res?.tokens?.access);
            localStorage.setItem("username", res.username)
            localStorage.setItem("phone", res.phone)
            localStorage.setItem("id", res.id)
            setTimeout(() => {
              router.push({name: 'home'})
            }, 3000);
            setTimeout(() => {
                location.reload()
            }, 3700);
        }else if(res.message == "User logged in successfully"){
            Notification({ text: "Oops! Something went wrong. !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }
      } catch (err) {
        console.log(err);
        if(err.response?.data.phone == "user with this phone already exists.") {
            Notification({ text: "You are already registered !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
            setTimeout(() => {
                router.push({name: "login"})
            }, 3500);
        }else if(err.response.data.detail == "Given token not valid for any token type"){
          Notification({ text: "Oops! Something went wrong !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
          localStorage.clear()
          setTimeout(() => {
            location.reload()
          }, 1000);
        }else {
          Notification({ text: "Oops! Something went wrong !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
        }

      }
    },
  }
})
