<template>
    <div>
        <AppModal v-model="dialog">
            <h1 class="text-black text-[40px] text-center font-semibold mt-[20px]">Fill in Your Contact Information</h1>
            <Form @submit.prevent="handleSubmit" class="flex flex-col gap-[10px] px-[70px] mt-[10px]">
                <div>
                    <label for="username" class="text-black text-[20px] ml-[5px]">Name</label>
                    <br>
                    <InputText type="text" v-model="form.name" unstyled autocomplete="off" name="username"
                        placeholder="Name"
                        class="w-full text-black text-[17px] border-[2px] border-gray-500 focus:border-[#F4C73F] rounded-[12px] p-[12px] mt-[5px] outline-none" />
                </div>
                <div>
                    <label for="phone" class="text-black text-[20px] ml-[5px]">Phone</label>
                    <br>
                    <InputText unstyled v-model="form.phone" name="phone" autocomplete="off" type="number"
                        placeholder="+1 234 567 890"
                        class="w-full bg-transparent no-spinner text-black text-[17px] border-[2px] border-gray-500 focus:border-[#F4C73F] rounded-[12px] p-[12px] mt-[5px] outline-none" />
                </div>
                <div>
                    <label for="address" class="text-black text-[20px] ml-[5px]">Address</label>
                    <br>
                    <InputText unstyled v-model="form.password" name="address" autocomplete="off" type="text"
                        placeholder="Address"
                        class="w-full bg-transparent no-spinner text-black text-[17px] border-[2px] border-gray-500 focus:border-[#F4C73F] rounded-[12px] p-[12px] mt-[5px] outline-none" />
                </div>
                <div class="">
                    <h1 class="text-[23px] font-semibold ml-[5px]">Select Payment Method</h1>
                    <div class="flex gap-[10px] mt-[5px]">
                        <!-- Card Option -->
                        <div @click="paymentMethod = 'Pay with Card'"
                            :class="paymentMethod === 'Pay with Card' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'"
                            class="flex items-center gap-2 p-3 border rounded-lg cursor-pointer">
                            <input type="radio" :checked="paymentMethod === 'Pay with Card'" class="form-radio" />
                            <span>Pay with Card</span>
                        </div>

                        <!-- Cash Option -->
                        <div @click="paymentMethod = 'Pay with Cash'"
                            :class="paymentMethod === 'Pay with Cash' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'"
                            class="flex items-center gap-2 p-3 border rounded-lg cursor-pointer">
                            <input type="radio" :checked="paymentMethod === 'Pay with Cash'" class="form-radio" />
                            <span>Pay with Cash</span>
                        </div>
                    </div>

                </div>

                <Button unstyled type="submit" label="Place an order"
                    class="bg-[#F4C73F] text-[18px] text-gray-700 py-[12px] rounded-[24px] my-[10px] font-medium" />
            </Form>
        </AppModal>
    </div>
</template>

<script setup>
import AppModal from '@/ui/app-modal.vue';
import { ref } from 'vue';
import router from '@/router';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowRightThin, mdiArrowTopRight } from '@mdi/js';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Notification from '@/plugins/Notification';
import { useOrderStore } from '@/stores/order';

const store = useOrderStore()
const dialog = ref(false)
const paymentMethod = ref('')
const products = ref('')
const form = ref({
    username: '',
    password: '',
    phone: ''
})

const handleSubmit = async (e) => {
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    if (!data.username.trim()) {
        Notification({ text: "Enter your Name. Please !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
    } else if (!data.phone.trim()) {
        Notification({ text: "Enter your Phone. Please !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
    } else if(!data.address.trim()){
        Notification({ text: "Enter your Address. Please !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
    }else if(!paymentMethod.value.trim()) {
        Notification({ text: "Select Payment Method. Please !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
    }else {
        let items = {
            ...products.value
        }
        let payload = {
            items: items,
            address: data.address,
        }
        console.log(payload);
        // console.log(items);
        return await store.createOrder(payload)
    }
    // console.log(data);
}

const openModal = (item) => {
    if(item) {
        dialog.value = true
        products.value = item.items
    }else{
        products.value = ''
    }
    console.log(item);
}

defineExpose({ openModal });
;
</script>

<style lang="scss" scoped>
.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.no-spinner[type=number] {
    -moz-appearance: textfield;
}
</style>