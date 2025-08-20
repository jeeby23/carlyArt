<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Layout/Navbar.vue';
</script>

<template>
  <header>
     <Navbar/>
      <RouterView />
  
  </header>

</template>

