<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import {ref} from 'vue'
 import { Toaster  } from 'vue-sonner'

const sidebar=ref(true);

const showSidebar=()=>{
  sidebar.value=!sidebar.value;
}
</script>

<template>
  <main class="bg-gray-200/70">
  <Toaster  />
    <div class="flex">
      <Sidebar  :sidebar="sidebar"/>
      <main class="w-4/5">
        <Navbar  :showSidebar="showSidebar"/>
        <RouterView />
      </main>
    </div>
  </main>
</template>
