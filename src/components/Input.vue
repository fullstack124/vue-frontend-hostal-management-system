<script setup>
import { defineProps } from 'vue';
const props=defineProps({
  type: String,
  name: String,
  placeHolder: String,
  label: String,
  value: String
});
console.log(props.value)
</script>
<template>
  <div>
    <label for class="text-md font-semibold">{{label}}</label>
    <input
      :type="type"
      v-model="props.value"
      class="w-full my-1 py-2 px-2 rounded-md outline-none border"
      :name="name"
      @input="$emit('input',props.value.data)"
      :placeholder="placeHolder"
    />
  </div>
</template>