<template>
  <div class="relative">
    <!-- Loading Overlay -->
    <div
      v-if="loading"
      class="fixed inset-0 flex items-center justify-center bg-[#01101D] z-50"
    >
      <!-- Spinner -->
      <div class="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <!-- Matn -->
      <span class="text-white text-lg ml-4">Loading...</span>
    </div>

    <!-- Asosiy sayt -->
    <div v-else>
      <header
        class="w-full h-[104px] absolute top-0 left-0 z-10"
        :class="['login','register','cart'].includes(route.name) ? 'bg-[#01101D]' : ''"
      >
        <div class="w-full h-full flex justify-around items-center">
          <div><img src="./assets/images/Logo.svg" alt="Logo"></div>

          <div
            class="w-[412px] py-[16px] px-[24px] bg-[#00000077] rounded-[72px] flex justify-around items-center"
            :class="['login','register','cart'].includes(route.name) ? 'bg-gray-700' : ''"
          >
            <div v-for="(item, index) in items" :key="index">
              <router-link
                :to="item.path"
                class="text-white hover:text-gray-400"
                active-class="active"
              >
                <span>{{ item.name }}</span>
              </router-link>
            </div>
          </div>

          <div class="flex text-white">
            <div
              v-if="username"
              class="flex items-center cursor-pointer"
              @click="profile"
            >
              <svg-icon type="mdi" :path="mdiAccount" class="text-white w-[27px] h-[27px]" />
              <span class="pl-[5px]">{{ username }}</span>
            </div>
            <div
              v-else
              class="flex items-center cursor-pointer"
              @click="login"
            >
              <svg-icon type="mdi" :path="mdiAccount" class="text-white w-[27px] h-[27px]" />
              <span class="pl-[5px]">Login</span>
            </div>

            <div
              class="flex items-center pl-[40px] cursor-pointer relative"
              @click="carts"
            >
              <svg-icon type="mdi" :path="mdiCart" class="text-white w-[27px] h-[27px]" />
              <span class="pl-[5px]">Cart</span>
              <span
                v-if="cart.length > 0"
                class="absolute right-[-28px] bg-red-500 text-white text-[13px] font-bold px-[7px] py-[2px] rounded-[4px]"
              >
                {{ cart.length }}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div>
        <RouterView />
      </div>

      <footer>
        <!-- Footer -->
      </footer>
    </div>
  </div>

</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccount, mdiCart, } from '@mdi/js';
import { useCounterStore } from './stores/counter';
import { storeToRefs } from 'pinia'
import router from './router';

const store = useCounterStore()

const route = useRoute()
const cart = ref([])
const username = ref(localStorage.getItem("username"))
const loading = ref(true);

function updateCart() {
  cart.value = JSON.parse(localStorage.getItem("selectedFood")) || []
}

onMounted(() => {
  updateCart()
  window.addEventListener("selectedFood-updated", updateCart)
})

const items = computed(() => [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/menu',
    name: 'Menu'
  },
  {
    path: '/location',
    name: 'Location'
  },
])
const login = () => {
  router.push({name: "login"})
}
const carts = () => {
  router.push({name: "cart"})
}
const profile = () => {
  router.push({name: "profile"})
}

onMounted(() => {
  // 1-variant: minimal vaqt kutish (masalan 1.5s)
  setTimeout(() => {
    loading.value = false;
  }, 500);

  // 2-variant: sahifadagi rasmlar yuklanganda
  // window.addEventListener("load", () => {
  //   loading.value = false;
  // });
});
;
</script>

<style lang="scss" scoped>
.active {
  color: #F4C73F;
  font-size: 20px;
}
</style>