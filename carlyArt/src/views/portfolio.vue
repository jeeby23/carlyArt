<template>
  <div>
    <div class="mt-[100px] font-dosis">
      <div
        class="relative bg-cover bg-center h-32 w-full flex items-center text-white"
        :style="{ backgroundImage: `url(${pagebg})` }"
      >
        <div class="absolute inset-0"></div>
        <h1
          class="relative text-4xl md:left-[100px] text-black font-bold z-0 px-5 md:px-0"
        >
          Portfolio
        </h1>
      </div>
      <div class="md:px-[100px] py-10">
        <div class="flex flex-wrap justify-between gap-4">
          <!-- First Row -->
          
          <img
          :src="set8"
          alt=""
          class="md:w-[32%] md:h-auto object-cover px-5 md:px-0"
          />
          <img
          :src="set9"
          alt=""
          class="md:w-[32%] md:h-auto object-cover px-5 md:px-0"
          />
          <img
          :src="set10"
          alt=""
          class="md:w-[32%] md:h-auto object-cover px-5 md:px-0"
          />
          
          <img
            :src="set5"
            alt=""
            class="md:w-[32%] md:h-auto object-cover px-5 md:px-0"
          />
          <img
            :src="set6"
            alt=""
            class="md:w-[32%] md:h-auto object-cover px-5 md:px-0"
          />
          <img
            :src="set7"
            alt=""
            class="md:w-[32%] md:h-auto object-cover px-5 md:px-0"
          />
          <!-- Second Row -->
          <img
            :src="port4"
            alt=""
            class="md:w-[32%] md:h-auto object-cover px-5 md:px-0"
          />
          <img
            :src="port5"
            alt=""
            class="md:w-[32%] md:h-auto object-cover object-right px-5 md:px-0"
          />
          <img
            :src="port6"
            alt=""
            class="md:w-[32%] md:h-auto object-cover px-5 md:px-0"
          />

          <img
            :src="port7"
            alt=""
            class="md:w-[32%] md:h-auto object-cover px-5 md:px-0"
          />
          <img
            :src="port8"
            alt=""
            class="md:w-[32%] md:h-auto object-cover px-5 md:px-0"
          />
          <img
            :src="port9"
            alt=""
            class="md:w-[32%] md:h-auto object-cover px-5 md:px-0"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import set5 from "@/assets/img/set5.jpeg";
import set6 from "@/assets/img/set6.jpeg";
import set7 from "@/assets/img/set7.jpeg";
import set8 from "@/assets/img/set8.jpeg";
import set9 from "@/assets/img/set9.jpeg";
import set10 from "@/assets/img/set10.jpeg";
import pagebg from "@/assets/img/pageBg.jpg";

import port4 from "@/assets/img/port4.jpg";
import port5 from "@/assets/img/port5.jpg";
import port6 from "@/assets/img/port6.jpg";
import port7 from "@/assets/img/port7.jpg";
import port8 from "@/assets/img/port8.jpg";
import port9 from "@/assets/img/port9.jpg";
import Footer from "@/components/Layout/footer.vue";
</script>
