<script setup>
defineProps({
  name: String,
  label: String,
  options:Array,
});
</script>
<template>
  <div>
    <label for class="text-md font-semibold">{{label}}</label>
    <select class="w-full my-1 py-2 px-2 rounded-md outline-none border" :name="name" >
        <option v-for="(option, index) in options" :key="index" :value="option.name">{{option.name}}</option>
    </select>
  </div>
</template>