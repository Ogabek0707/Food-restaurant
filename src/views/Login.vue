<template>
    <div class="pt-[100px]">
        <section id="login" class="w-full h-[100%] py-[80px] bg-gray-100">
            <div class="flex justify-center gap-[60px]">
                <div class=" p-[24px] w-[610px] rounded-[24px]">
                    <h1 class="text-black text-[50px] text-center font-semibold">Login</h1>
                    <Form @submit.prevent="handleSubmit" class="flex flex-col mt-[10px]">
                        <div>
                            <label for="username" class="text-black text-[20px] ml-[5px]">Name</label>
                            <br>
                            <InputText type="text" v-model="form.full_name" unstyled autocomplete="off" name="username"
                                placeholder="Name"
                                class="w-full text-black text-[17px] border-[2px] border-gray-500 focus:border-[#F4C73F] rounded-[12px] p-[12px] mt-[5px] outline-none" />
                        </div>
                        
                        <div>
                            <p class="text-blue-500 text-[20px] text-end mt-[12px] mr-[5px] mb-[-18px]"><span class="cursor-pointer" @click="forgotPassword">Forgot password ?</span></p>
                            <label for="password" class="text-black text-[20px] ml-[5px]">Password</label>
                            <br>
                            <InputText unstyled v-model="form.phone" name="password" autocomplete="off" type="password"
                                placeholder="Password"
                                class="w-full bg-transparent no-spinner text-black text-[17px] border-[2px] border-gray-500 focus:border-[#F4C73F] rounded-[12px] p-[12px] mt-[5px] outline-none" />
                        </div>
                        <Button unstyled type="submit" label="Login"
                            class="bg-[#F4C73F] text-[18px] py-[12px] rounded-[24px] mt-[25px] font-medium" />
                        <div class="flex justify-between mt-[12px]">
                            <p class="text-blue-500 text-[20px] ml-[10px]">Do you have an account ?</p>
                            <div class="flex items-center cursor-pointer" @click="register">
                                <svg-icon type="mdi" :path="mdiArrowRightThin" class="w-[30px] h-[30px] text-blue-500"></svg-icon>
                                <p class="text-blue-500 text-[20px] mr-[10px]">Register</p>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    </div>
    <footer class="bg-[#01101D] py-[105px]">
        <div>
            <div class="flex justify-around">
                <div class="max-w-[500px]">
                    <h1 class="text-white text-[48px] font-semibold leading-[114.99999999999999%]">Explore Our
                        French-Inspired Dishes</h1>
                    <button
                        class="bg-[#F4C73F] mt-[30px] py-[14px] px-[18px] font-medium rounded-[24px] flex gap-[10px] cursor-pointer"
                        @click="menu">View Menu <svg-icon type="mdi" class="text-white"
                            :path="mdiArrowTopRight"></svg-icon></button>
                </div>
                <div class="flex flex-col gap-[20px]">
                    <a href="/" class="text-[#575757] text-[20px]">Home</a>
                    <a href="/menu" class="text-[#575757] text-[20px]">Menu</a>
                    <a href="location" class="text-[#575757] text-[20px]">Location</a>
                </div>
                <div>
                    <p class="text-white text-[18px] font-semibold">Connect On</p>
                    <div class="flex gap-[16px] items-center mt-[20px] ml-[-2px]">
                        <a href=""><img src="../assets/images/Facebook Icon.png" class="w-[34px] h-[34px]" alt=""></a>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
                                <g fill="none">
                                    <rect width="256" height="256" fill="url(#SVGWRUqebek)" rx="60" />
                                    <rect width="256" height="256" fill="url(#SVGfkNpldMH)" rx="60" />
                                    <path fill="#fff"
                                        d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334" />
                                    <defs>
                                        <radialGradient id="SVGWRUqebek" cx="0" cy="0" r="1"
                                            gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#fd5" />
                                            <stop offset=".1" stop-color="#fd5" />
                                            <stop offset=".5" stop-color="#ff543e" />
                                            <stop offset="1" stop-color="#c837ab" />
                                        </radialGradient>
                                        <radialGradient id="SVGfkNpldMH" cx="0" cy="0" r="1"
                                            gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#3771c8" />
                                            <stop offset=".128" stop-color="#3771c8" />
                                            <stop offset="1" stop-color="#60f" stop-opacity="0" />
                                        </radialGradient>
                                    </defs>
                                </g>
                            </svg></a>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 448 512">
                                <path fill="#fff"
                                    d="M357.2 48h70.6L273.6 224.2L455 464H313L201.7 318.6L74.5 464H3.8l164.9-188.5L-5.2 48h145.6l100.5 132.9zm-24.8 373.8h39.1L119.1 88h-42z" />
                            </svg></a>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path fill="#25D366" fill-rule="evenodd"
                                    d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11c-1.936 0-3.757-.5-5.338-1.38L1.4 22.6l.98-5.262A10.95 10.95 0 0 1 1 12m6.147-5.353c.654-.655 1.527-.713 1.998-.69c.435.02.776.272.984.564l.952 1.334a1.5 1.5 0 0 1-.16 1.932l-.674.673c.223.544.67 1.42 1.272 2.021s1.477 1.05 2.02 1.273l.675-.674a1.5 1.5 0 0 1 1.931-.16l1.335.951c.291.209.544.55.564.984c.022.471-.036 1.344-.69 1.999c-1.067 1.066-2.741 1.077-4.264.659c-1.55-.426-3.13-1.34-4.197-2.406c-1.065-1.066-1.98-2.646-2.406-4.197c-.418-1.523-.407-3.197.66-4.263"
                                    clip-rule="evenodd" stroke-width="1.3" stroke="#fff" />
                            </svg></a>
                    </div>
                </div>
            </div>
            <div class="flex justify-between w-[86%] m-auto pt-[105px]">
                <p class="text-[#575757]">©Platieu 2025. All rights reserved.</p>
                <div class="text-[#575757] flex items-center gap-[8px]">Privacy Policy <p
                        class="w-[6px] h-[6px] bg-[#575757] border border-[#575757] rounded-[50%]"></p> Terms of
                    Services</div>
            </div>
            <div class="mt-[50px]">
                <div class="w-[86%] border-[0.5px] border-[#575757] m-auto"></div>
            </div>
        </div>
        <div class="flex justify-center items-center pt-[60px]">
            <img src="../assets/images/Logo Text.png" alt="">
        </div>
    </footer>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import router from '@/router';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowRightThin, mdiArrowTopRight } from '@mdi/js';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Notification from '@/plugins/Notification';
import { useAuthStore } from '@/stores/auth';

const store = useAuthStore()

const form = ref({
    username: '',
    password: ''
})

const handleSubmit = async (e) => {
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    if (!data.username.trim()) {
        Notification({ text: "Enter your Name. Please !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
    } else if (!data.password.trim()) {
        Notification({ text: "Enter your Password. Please !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
    } else {
        await store.Login(data)
    }
    console.log(data);
};

const forgotPassword = () => {
    alert("therefore, it should not be forgotten : )")
}

const menu = () => {
    router.push({ name: "menu" })
};
const register = () => {
    router.push({ name: "register" })
};


</script>

<style lang="scss" scoped>
.img {
    background-image: linear-gradient(#00152899, #00152899), url('../assets/images/Background\ Image.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.no-spinner[type=number] {
    -moz-appearance: textfield;
}
</style>