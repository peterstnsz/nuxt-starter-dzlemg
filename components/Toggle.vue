<script setup>
import { ref } from 'vue';
let isSelected = ref(false);

const toggleSelect = () => {
  isSelected.value = !isSelected.value;
  console.log(isSelected);
};
</script>

<script>
export default {
  inheritAttrs: false,
  props: ['itemName'],
};
</script>

<template>
  
 <div @click="toggleSelect"
  :class="[
    'w-[256px] p-4 border bg-yellow-50 rounded-[4px] flex flex-row justify-center items-center text-zinc-800 cursor-pointer transition-all',
    isSelected.value ? 'm-2' : 'hover:bg-indigo-900 hover:text-zinc-50'
  ]"
>
    <p>
      {{ itemName }}
    </p>
  </div>
</template>

<style scoped>
.border {
  border-top: 1px solid var(--indigo-900, #312e81);
  border-right: 1px solid var(--indigo-900, #312e81);
  border-bottom: 3px solid var(--indigo-900, #312e81);
  border-left: 1px solid var(--indigo-900, #312e81);
}
</style>
