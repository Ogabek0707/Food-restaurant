<template>
    <div class="pt-[100px]">
        <section id="menu" class="bg-gray-100 py-[105px]">
            <div v-if="carts && carts.length > 0" class="flex justify-center">
                <div class="flex justify-between items-center w-[86%]">
                    <h1 class="text-black text-[58px] font-semibold">Today Menu</h1>
                    <div class="bg-gray-700 p-[4px] flex items-center gap-[4px] rounded-[20px]">
                        <button v-for="item in typesMenu" :key="item" @click="select(item)"
                            class="py-[8px] px-[20px] transition rounded-[20px] text-gray-100" :class="item === active
                                ? 'bg-[#F4C73F] hover:bg-[#F4C73F] text-gray-700'
                                : 'hover:bg-gray-500'">
                            <span>{{ item }}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div v-else class="w-full">
                <div class="w-full flex justify-center">
                    <div class="text-center">
                        <h1 class="text-black text-[56px]">Your cart is empty for now</h1>
                        <p class="text-black text-center text-[20px] w-[580px]">Start from the menu — search for what
                            you need or explore our collections.</p>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button
                        class="bg-[#F4C73F] text-center mt-[30px] py-[14px] px-[18px] font-medium rounded-[24px] flex gap-[10px] cursor-pointer"
                        @click="menu">View Menu <svg-icon type="mdi" class="text-white"
                            :path="mdiArrowTopRight"></svg-icon></button>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="w-[86%] flex justify-between items-center gap-[40px] mt-[60px]">
                    <div class="grid grid-cols-2 gap-[40px]">

                        <div class="w-[630px] flex gap-[24px] border-[1.5px] border-gray-400 p-[10px] rounded-[15px]"
                            v-for="item in filteredFood" :key="item">
                            <div><img :src="item.img" alt=""></img></div>
                            <div>
                                <div class="flex items-center gap-[16px] mt-[5px] mb-[10px]">
                                    <h1 class="text-black text-[20px] font-medium leading-[28px]">{{ item.name }}</h1>
                                    <span class="w-[150px] border-t-[2px] border-[#242424]"></span>
                                    <span class="text-black">{{ item.price }}</span>
                                </div>
                                <p class="max-w-[320px] text-black text-[14px] leading-[24px]">{{ item.description
                                    }}
                                </p>
                                <div class="flex items-center gap-[30px] mt-[5px]">
                                    <span class="py-[7px] px-[15px] text-white bg-gray-600 rounded-[20px]">{{ item.type
                                        }}</span>
                                    <button
                                        class="flex items-center gap-[5px] py-[5px] px-[15px] bg-gray-600 text-red-500 rounded-[20px] hover:scale-[1.1]"
                                        @click="deleteFood(item)"><svg-icon type="mdi" :path="mdiDeleteAlert"
                                            class=" w-[27px] h-[27px]" /><span class="">Delete</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="carts && carts.length > 0" class="flex justify-center mt-[40px]">
                <div class="w-[35%] border-[1.5px] border-gray-400 p-[15px] rounded-[10px]">
                    <h1 class="text-[35px] font-bold text-center">Your order</h1>
                    <div class="flex items-start gap-[20px] mb-[15px]">
                        <div class="border border-gray-400 p-[12px] rounded-[8px]">
                            <h1 class="text-[20px] font-semibold">
                                Products <span class="text-blue-500">{{ carts.length }}</span> :
                            </h1>
                        </div>

                        <div class="border border-gray-400 p-[12px] rounded-[8px]">
                            <h1 class="text-[20px] font-semibold">
                                Total Price <span class="text-blue-500">{{ totalPrice }}</span> :
                            </h1>
                        </div>
                    </div>
                    <div class="w-full border border-gray-400 p-[12px] rounded-[8px]">
                        <div v-for="(item, index) in groupedCarts" :key="index" class="flex justify-between gap-[8px]">
                            <span class="text-black text-[18px]">
                                <span v-if="item.count > 1">{{ item.count }}x </span>{{ item.name }} :
                            </span>
                            <span class="text-blue-500 text-[20px] font-semibold">{{ item.price }}</span>
                        </div>
                    </div>
                    <div class="mt-[15px]">
                        <button class="w-full text-white text-[20px] font-semibold py-[10px] bg-blue-500 rounded-[8px]"
                            @click="order">Place Order</button>
                    </div>
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
                        class="bg-[#F4C73F] mt-[30px] py-[14px] px-[18px] font-medium rounded-[24px] flex gap-[10px] cursor-pointer hover:scale-[1.1]"
                        @click="menu">View Menu <svg-icon type="mdi" class="text-white"
                            :path="mdiArrowTopRight"></svg-icon></button>
                </div>
                <div class="flex flex-col gap-[20px]">
                    <a href="/" class="text-[#575757] text-[20px] hover:text-white">Home</a>
                    <a href="/menu" class="text-[#575757] text-[20px] hover:text-white">Menu</a>
                    <a href="location" class="text-[#575757] text-[20px] hover:text-white">Location</a>
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

    <OrderModal ref="openOrderModal"/>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import router from '@/router';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiDeleteAlert, mdiArrowTopRight } from '@mdi/js';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Notification from '@/plugins/Notification';
import { useAuthStore } from '@/stores/auth';
import OrderModal from './OrderModal.vue';

const store = useAuthStore()
const carts = ref(JSON.parse(localStorage.getItem("selectedFood")) || [])
const openOrderModal = ref("")

const active = ref("All Menu")
const typesMenu = ["All Menu", "Appetizer", "Main Course", "Dessert", "Beverage"]

const select = (item) => {
    active.value = item
    console.log("Selected", item);
}

const totalPrice = computed(() => {
    const sum = carts.value.reduce((total, item) => {
        const price = Number(item.price.replace("$", "")) || 0
        return total + price
    }, 0)

    return `$${sum}`
})

const filteredFood = computed(() => {
    if (active.value === "All Menu") {
        return carts.value
    }
    return carts.value.filter(food => food.type === active.value)

})

const groupedCarts = computed(() => {
    const map = {}
    carts.value.forEach(item => {
        const key = item.name + item.price
        if (map[key]) {
            map[key].count += 1
        } else {
            map[key] = { ...item, count: 1 }
        }
    })

    return Object.values(map)
})

onMounted(() => {
    const data = localStorage.getItem("selectedFood")
    if (data) {
        carts.value = JSON.parse(data)
    }
    console.log(filteredFood.value);
})

if (!carts.value || carts.value.length === 0) {
    console.log("Carts bo'sh");
} else {
    console.log("Cartsda elementlar bor");
}

console.log(carts.value);
const form = ref({
    username: '',
    password: '',
    phone: ''
})

const order = async () => {
  let payload = carts.value.map(item => ({
    name: item.name,
    price: item.price
  }));
  let total = payload.reduce((sum, item) => {
    let priceNumber = parseFloat(item.price.replace('$', ''));
    return sum + priceNumber;
  }, 0);
  let total_price = {
    total_price: total
  }
  let a = [...payload,total_price]

  let name = localStorage.getItem("username")
  let phone = localStorage.getItem("phone")

  let item = {
    array: a,
    name: name
  }

  if(name == null){
    Notification({ text: "Please register !!!" }, { type: "danger" }, { time: "3500" }, { description: "You are not registered." });
    setTimeout(() => {
        router.push({name: "login"})
    }, 3500);
  }else {
    openOrderModal.value.openModal(item)
    // console.log(item);
  }

//   console.log(a);
//   console.log(name,phone);
};

const deleteFood = (item) => {
    const data = JSON.parse(localStorage.getItem("selectedFood")) || []

    // kelgan item qaysi indexda ekanini topamiz
    const index = data.findIndex(cartItem => cartItem.name === item.name && cartItem.price === item.price)

    if (index !== -1) {
        data.splice(index, 1) // o‘chiramiz
        localStorage.setItem("selectedFood", JSON.stringify(data))
        carts.value = data
        window.dispatchEvent(new Event("selectedFood-updated"))
    }
    //   location.reload()

}

const deliveryDate = computed(() => {
    const today = new Date()
    today.setDate(today.getDate() + 2) // 2 kun qo‘shamiz

    const options = { day: 'numeric', month: 'long' }
    return today.toLocaleDateString('en-US', options) // masalan: "21 August"
})

const menu = () => {
    router.push({ name: "menu" })
};
const login = () => {
    router.push({ name: "login" })
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