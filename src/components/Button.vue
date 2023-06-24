<script setup>
defineProps({
  type: String,
  label: String
});
</script>
<template>
  <button
    :type="type"
    class="bg-sky-400 my-1 text-white py-2 px-2 rounded-md outline-none border"
  >{{label}}</button>
</template>