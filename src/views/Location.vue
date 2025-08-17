<template>
    <section id="hero" class="w-full h-[80vh] img pt-[80px]">
        <div class="w-full h-full flex justify-center items-center">
            <div class="w-[668px] flex flex-col justify-center items-center text-center">
                <div><img src="../assets/images/Union.svg" alt="union"></img></div>
                <h1 class="my-[15px] text-[58px] text-white font-semibold leading-[114.99999999999999%]">We’d Love to Hear From You</h1>
                <p class="text-[18px] max-w-[802px] text-white leading-[26px] font-normal">Whether you have a question, special request, or simply want to say hello, our team is here to help.</p>
            </div>
        </div>
    </section>


    <section id="contact" class="bg-[#05131F] py-[105px]">
        <div class="flex justify-center gap-[60px] ">
            <div class="bg-[#010614] p-[24px] w-[610px] rounded-[24px]">
                <h1 class="text-white text-[34px]">Contact Us</h1>
                <Form @submit.prevent="handleSubmit" class="flex flex-col gap-[15px] mt-[10px]">
                    <div>
                        <label for="name" class="text-white ml-[5px]">Full Name</label>
                        <br>
                        <InputText type="text" v-model="form.full_name" unstyled autocomplete="off" name="name"
                            placeholder="Full Name"
                            class="w-full bg-transparent text-white border border-gray-400 focus:border-[#F4C73F] rounded-[12px] p-[12px] mt-[5px] outline-none" />
                    </div>
                    <div>
                        <label for="phone" class="text-white ml-[5px]">Phone</label>
                        <br>
                        <InputText unstyled v-model="form.phone" name="phone" autocomplete="off" type="number"
                            placeholder="+1 234 567 890"
                            class="w-full bg-transparent no-spinner text-white border border-gray-400 focus:border-[#F4C73F] rounded-[12px] p-[12px] mt-[5px] outline-none" />
                    </div>
                    <div>
                        <label for="email" class="text-white ml-[5px]">Email</label>
                        <br>
                        <InputText type="text" v-model="form.email" unstyled autocomplete="off" name="email"
                            placeholder="Email"
                            class="w-full bg-transparent text-white border border-gray-400 focus:border-[#F4C73F] rounded-[12px] p-[12px] mt-[5px] outline-none" />
                    </div>
                    <div>
                        <label for="message" class="text-white ml-[5px]">Special Request</label>
                        <br>
                        <Textarea unstyled v-model="form.description" name="message" rows="5" cols="30"
                            class="w-full bg-transparent text-white border border-gray-400 focus:border-[#F4C73F] rounded-[12px] p-[12px] mt-[5px] outline-none" />
                    </div>
                    <div class="flex items-center gap-[10px]">
                        <input type="checkbox"
                            class="bg-transparent text-white border-[1.5px] border-gray-400 w-[20px] h-[20px]" />
                        <p class="text-white">By checking the box you agree to our <span
                                class="text-[#D17C0E] border-b border-[#D17C0E] cursor-pointer">Terms of Service</span>
                            and <span class="text-[#D17C0E] border-b border-[#D17C0E] cursor-pointer">Privacy
                                Policy.</span></p>
                    </div>
                    <Button unstyled type="submit" label="Send Message"
                        class="bg-[#F4C73F] py-[12px] rounded-[24px] mt-[5px]" />
                </Form>
            </div>
            <div class="mt-[-15px]">
                <h1 class="text-white text-[58px] max-w-[594px] leading-[114.99999999999999%] font-semibold">Craving
                    Something Delicious?</h1>
                <p class="text-white text-[18px] mt-[5px]">From savory bites to sweet delights, your cravings end here.
                </p>
                <div class="flex gap-[32px] mt-[40px]">
                    <div>
                        <h1 class="text-white text-[24px] font-semibold">Our Location</h1>
                        <div class="flex gap-[12px] max-w-[276px] mt-[5px]">
                            <svg-icon type="mdi" class="text-[#F4C73F]" :path="mdiMapMarker"></svg-icon>
                            <p class="text-white">21 Rue des Lilas 75001 Paris, France</p>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-white text-[24px] font-semibold">Phone Number</h1>
                        <div class="flex gap-[12px] max-w-[276px] mt-[5px]">
                            <svg-icon type="mdi" class="text-[#F4C73F]" :path="mdiPhone"></svg-icon>
                            <a href="tel:+33 6 12 34 56 78" class="text-white">+33 6 12 34 56 78</a>
                        </div>
                    </div>
                </div>
                <div class="flex gap-[32px] mt-[25px]">
                    <div>
                        <h1 class="text-white text-[24px] font-semibold">Email Address</h1>
                        <div class="flex gap-[12px] w-[276px] mt-[5px]">
                            <svg-icon type="mdi" class="text-[#F4C73F]" :path="mdiEmail"></svg-icon>
                            <a href="mailto:hello@platieu.com" class="text-white">hello@platieu.com</a>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-white text-[24px] font-semibold">Opening Hours</h1>
                        <div class="flex gap-[12px] mt-[10px]">
                            <svg-icon type="mdi" class="text-[#F4C73F]" :path="mdiClockTimeFour"></svg-icon>
                            <p class="text-white max-w-[236px]">Monday - Friday: 12:00 PM - 2:30 PM & 7:00 PM - 10:30 PM
                            </p>
                        </div>
                        <div class="flex gap-[12px] mt-[10px]">
                            <svg-icon type="mdi" class="text-[#F4C73F]" :path="mdiClockTimeFour"></svg-icon>
                            <p class="text-white">Saturday: 7:00 PM - 11:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center mt-[50px]">
            <iframe width="86%" height="650" style="border:0; border-radius: 16px;" loading="lazy" allowfullscreen
                src="https://www.google.com/maps?q=21+Rue+des+Lilas,+75001+Paris,+France&output=embed">
            </iframe>
        </div>
    </section>

    <section id="address" class="bg-[#05131F] py-[105px]">
        <div class="flex justify-center">
            <div class="w-[86%] flex justify-around gap-[64px]">
                <div class="w-[370px]">
                    <h1 class="text-white text-[48px] font-semibold leading-[114.99999999999999%]">Find Platieu Across France</h1>
                    <p class="text-[#D7D7D7] text-[18px] leading-[26px] mt-[15px]">Enjoy Platieu's taste at our locations nationwide. A memorable dining experience is always nearby.</p>
                </div>
                <div class="w-[370px] ml-[10px]">
                    <div>
                        <div class="flex items-center gap-[8px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="red" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/><path d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z"/></g></svg>
                            <p class="text-white text-[20px] font-medium leading-[28px]">Île-de-France</p>
                        </div>
                        <p class="text-[#D7D7D7] leading-[24px] w-[146px] mt-[8px]">12 Rue de Rivoli  75001 Paris, France</p>
                    </div>
                    <div class="my-[25px]">
                        <div class="flex items-center gap-[8px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="red" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/><path d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z"/></g></svg>
                            <p class="text-white text-[20px] font-medium leading-[28px]">Provence-Alpes-Côte d'Azur</p>
                        </div>
                        <p class="text-[#D7D7D7] leading-[24px] w-[181px] mt-[8px]">45 Avenue Jean Médecin 06000 Nice, France</p>
                    </div>
                    <div>
                        <div class="flex items-center gap-[8px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="red" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/><path d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z"/></g></svg>
                            <p class="text-white text-[20px] font-medium leading-[28px]">Nouvelle-Aquitaine</p>
                        </div>
                        <p class="text-[#D7D7D7] leading-[24px] w-[186px] mt-[8px]">88 Cours Victor Hugo  33000 Bordeaux, France</p>
                    </div>
                </div>
                <div class="w-[370px]">
                    <div>
                        <div class="flex items-center gap-[8px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="red" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/><path d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z"/></g></svg>
                            <p class="text-white text-[20px] font-medium leading-[28px]">Auvergne-Rhône-Alpes</p>
                        </div>
                        <p class="text-[#D7D7D7] leading-[24px] w-[200px] mt-[8px]">22 Rue de la République  69002 Lyon, France</p>
                    </div>
                    <div class="my-[25px]">
                        <div class="flex items-center gap-[8px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="red" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/><path d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z"/></g></svg>
                            <p class="text-white text-[20px] font-medium leading-[28px]">Occitanie</p>
                        </div>
                        <p class="text-[#D7D7D7] leading-[24px] w-[181px] mt-[8px]">10 Rue Alsace Lorraine  31000 Toulouse, France</p>
                    </div>
                    <div>
                        <div class="flex items-center gap-[8px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="red" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/><path d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z"/></g></svg>
                            <p class="text-white text-[20px] font-medium leading-[28px]">Hauts-de-France</p>
                        </div>
                        <p class="text-[#D7D7D7] leading-[24px] w-[186px] mt-[8px]">19 Place Rihour  59800 Lille, France</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <footer class="bg-[#01101D] py-[105px]">
        <div>
            <div class="flex justify-around">
                <div class="max-w-[500px]">
                    <h1 class="text-white text-[48px] font-semibold leading-[114.99999999999999%]">Explore Our French-Inspired Dishes</h1>
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
                <div class="text-[#575757] flex items-center gap-[8px]">Privacy Policy <p class="w-[6px] h-[6px] bg-[#575757] border border-[#575757] rounded-[50%]"></p> Terms of Services</div>
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
import { ref } from 'vue';
import router from '@/router';
import img1 from "../assets/images/Testimonial Item.svg"
import img2 from "../assets/images/Testimonial Item (1).svg"
import img3 from "../assets/images/Testimonial Image 2.svg"
import SvgIcon from '@jamescoyle/vue-icon';
import {  mdiMapMarker, mdiPhone, mdiEmail, mdiClockTimeFour, mdiArrowTopRight } from '@mdi/js';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import Notification from '@/plugins/Notification';
import { useContactStore } from '@/stores/contact';
import { Icon } from '@iconify/vue'

const store = useContactStore()

const form = ref({
    name: '',
    phone: '',
    email: '',
    message: ''
})

const handleSubmit = async (e) => {
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    const address = 'Tashkent'
    if (!data.name.trim()) {
        Notification({ text: "Enter your Full Name. Please !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
    } else if (!data.phone.trim()) {
        Notification({ text: "Enter your Phone Number. Please !!!" }, { type: "danger" }, { time: "3500" }, { description: "" });
    } else if (!data.email.trim() || !data.email.endsWith('@gmail.com')) {
        Notification({ text: "Enter your Email. Please !!!" }, { type: "danger" }, { time: "3500" }, { description: "Example: user@gmail.com" });
    } else {
        // Notification({ text: "Hamma malumot kiritildi !!!" }, { type: "success" }, { time: "3500" }, { description: "" });
        await store.ContactAdd(data, address)
    }
    console.log(data);
}

const menu = () => {
    router.push({ name: "menu" })
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