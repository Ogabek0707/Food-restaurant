<template>
  <div class="relative">
    <header class="w-full h-[104px] absolute top-0 left-0 z-10">
      <div class="w-full h-full flex justify-around items-center">
        <div><img src="./assets/images/Logo.svg" alt=""></div>
        <div class="w-[412px] py-[16px] px-[24px] bg-[#00000077] rounded-[72px] flex justify-around">
          <div v-for="(item, index) in items" :key="index" >
            <router-link :to="item.path" class="text-[#D7D7D7]" active-class="active"><span>{{ item.name }}</span></router-link>
          </div>
        </div>
        <div class="flex text-white">
          <div class="flex items-center cursor-pointer"><svg-icon type="mdi" :path="mdiAccount" class="text-white w-[27px] h-[27px]" /><span class="pl-[5px]">Login</span></div>
          <div class="flex items-center pl-[40px] cursor-pointer relative" @click="cart1"><svg-icon type="mdi" :path="mdiCart" class="text-white w-[27px] h-[27px]" /><span class="pl-[5px]">Cart</span> <span v-if="cart > 0" class="absolute  right-[-28px]  bg-red-500 text-white text-[13px] font-bold px-[7px] py-[2px] rounded-[4px]">{{ cart }}</span></div>
        </div>
      </div>
    </header>
    <div>
      <RouterView />
    </div>
    <footer>

    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { ref, computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccount, mdiCart, } from '@mdi/js';
import { useCounterStore } from './stores/counter';
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { cart } = storeToRefs(store)

const cart1 = () => {
  store.count()
}

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
;
</script>

<style lang="scss" scoped>
.active {
  color: white;
}
</style>