<script setup>
import SidebarLink from './SidebarLink.vue';

defineProps({
    sidebar:Boolean,
})
</script>

<template>
  <div class="w-[270px] bg-[#2D353C]  md:block " :class="[{'hidden': !sidebar,'block':sidebar}]">
    <div class="bg-white px-10 py-3 text-center text-3xl">Islamabad</div>
    <div class="bg-[#1A2229]">
      <div class="flex items-center p-4 justify-around">
        <img
          class="rounded-full w-1/4"
          src="https://demo.ihostel.inilabs.xyz/uploads/images/default.png"
          alt="logo"
        />
        <div class="text-white">
          <h1>Admin</h1>
          <h1 class="text-sm">Super Admin</h1>
        </div>
      </div>
    </div>
    <SidebarLink />
  </div>
</template>

<style scoped>
.active {
  background-color: #232a2f;
}
</style>
    