<template>
<div>
    <div class="about mt-[100px] font-dosis">
    <!-- Background Banner -->
    <div
      class="relative bg-cover bg-center h-32 w-full flex items-center text-white"
      :style="{ backgroundImage: `url(${pagebg})` }"
    >
      <div class="absolute inset-0"></div>
      <h1 class="relative text-4xl md:left-[100px] text-black font-bold z-0 px-5 md:px-0">About</h1>
    </div>

    <!-- Content Section -->
    <div class=" px-5 md:px-[100px] mt-10">
      <div class="flex flex-col lg:flex-row items-start gap-10">
        <!-- Text Content -->
        <div class="w-full lg:w-2/3">
          <div
            v-for="(history, index) in historys"
            :key="index"
            class="mb-6"
          >
            <h1 class="text-2xl font-semibold mb-2">{{ history.title }}</h1>
            <p class="mb-4">{{ history.contentTwo }}</p>
            <p class="mb-4">{{ history.contentThree }}</p>
            <p>{{ history.contentFour }}</p>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img :src="artist" alt="Camila" class="w-[100%] max-w-[300px] h-auto object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
    <div class="px-5 md:px-[100px]">
    <h1 class=" list-none  font-bold text-[1.5rem] ">{{dist}}</h1>
    <p>{{head }}</p>
  </div>
    <div  v-for="(award,index) in awards" :key="index" class="md:px-[100px]">
      <div >
        <ul class="list-disc list-inside pl-4">
        <li>{{ award.heading}}</li>
      </ul>
      </div>
    </div>
    <div class="px-5 md:px-[100px]">
      <h1 class="font-bold text-[1.5rem]">{{ feature }}</h1>
      <p>{{heads}}</p>
    </div>
    <div v-for="(Exhibition, index) in Exhibitions" :key="index" class="md:px-[100px]">
      
     
      <ul class="list-disc list-inside pl-6 md:pl-4">
        <li >{{ Exhibition.exhit }}</li>
      </ul>
    </div>
    <div v-for="(Thing,index) in Things" :key="index" class=" px-5 md:px-[100px] py-5">
     <h2 class="font-bold text-[1rem] md:text-[1.5rem]">{{ Thing.prof }}</h2>
     <span>{{ Thing.more }} <router-link to="/portfolio" class="font-semibold">click here</router-link>. If you would like to see more reviews  <router-link to="/customer" class="font-semibold">clik here</router-link></span>
    </div>
  </div>
  <Footer/>
</div>
 
</template>


<script setup>

import pagebg from '@/assets/img/pageBg.jpg';
import artist from '@/assets/img/artist.jpg';
 import Footer from '@/components/Layout/footer.vue';
const historys = [
  {
    title: 'National Recognition',
    content: 'Since the late 1990s, Carly Ray artwork has drawn national attention, with features on major networks including CNN, ESPN, FOX Channel 7 (Miami), and Florida’s Sunshine Network. Her creative achievements have been highlighted in publications like USA Today, The Miami Herald, and The Fort Lauderdale Sun-Sentinel. Carly’s dynamic sports-themed pieces have graced the covers of respected magazines such as The Sports Collectible Digest and Dan’s Papers (circulated throughout New York City and The Hamptons).',
    contentTwo: 'Her talent has earned her several high-profile commissions, including official posters for the 2005 Dressage on The First Coast FEI Great American/USDF Region 3 Championships in Jacksonville, Florida, and the 1994 Aventura Festival of the Arts. She was also behind the limited-edition lithograph of Scott Mellanby released by the Florida Panthers Hockey Club.',
    contentThree: 'From 2003 to 2011, Camila served as the Artist in Residence at Miami’s Calder Race Course and Casino. Her live painting sessions during the 2010 World Equestrian Games in Lexington, Kentucky, captivated audiences, and she illustrated the award-winning western romance novel series Threads West by Reid Lance Rosenthal.',
    contentFour: 'In May 2013, Camila was honored as Artist of the Month by the National Museum of Sports Art in Indiana and was later chosen in 2014 to exhibit at the National Museum of Polo and Hall of Fame. That same year, she was a finalist in Showtime’s Big Boxing Mayhem: Mayweather vs. Maidana 2 World Title Fight Artist Competition.'

  }
]

const   dist = 'Honors & Distinctions'
const  head = 'Carly’s  talent has earned her numerous accolades and acknowledgments over the years for her exceptional visual artistry:'
import { awards } from '@/data/award';
import { Exhibitions } from '@/data/Exhibitions';
const feature = 'Featured Exhibitions';
const  heads = 'Carly Ray work has been showcased in numerous prestigious art festivals, cultural events, and sports venues across the United States:';

const  Things = [
 {
    prof: 'Carly Ray - Muralist, Sport Art, Pet Art, Custom Works',
    more: "To view more Camila's work "
 }
] 
import camilapic from '@/assets/img/camilapic.jpg'
</script>
