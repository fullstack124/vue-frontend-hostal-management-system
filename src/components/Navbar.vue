<script setup>

defineProps({
  showSidebar:Function,
})
</script>

<template>
  <nav class="bg-white px-8 py-4">
    <div class="flex justify-between items-center text-3xl">
      <div>
        <img src="./../assets/bar.svg" class="w-[30px] cursor-pointer"  @click="showSidebar" alt="Bar" />
      </div>
      <div>
        <div class="flex items-center">
          <div class="relative cursor-pointer">
            <img src="./../assets/notificaiton.svg" class="w-[15px]" alt="notification" />
            <span class="absolute -top-4 text-xs -right-3 bg-red-600 rounded-full p-[1px]">30</span>
          </div>
          <div class="-mt-4 ml-7">
            <span class="text-sm">
              Admin
              <i class="fa-solid fa-caret-down ml-2"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>