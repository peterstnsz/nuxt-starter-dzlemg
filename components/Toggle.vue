<script setup>
import { ref } from 'vue';
const isSelected = ref(false);

const toggleSelect = () => {
  isSelected.value = !isSelected.value;
  console.log(isSelected);
};
</script>

<script>
/* export default {
  inheritAttrs: false,
  props: ['itemName'],
}; */
</script>

  :class="[
    'w-[256px] p-4 border bg-yellow-50 rounded-[4px] flex flex-row justify-center items-center text-zinc-800 cursor-pointer transition-all',
    isSelected.value ? '.red' : 'hover:bg-indigo-900 hover:text-zinc-50'
  ]"

<template>
  <div @click="toggleSelect()">
    <div
      :class="[ 'w-[256px] p-4 border rounded-[4px] flex flex-row justify-center items-center  cursor-pointer transition-all hover:bg-indigo-700 hover:text-zinc-50', isSelected ? 'bg-indigo-900 text-zinc-50' :'bg-yellow-50 text-zinc-800'
      ]"
    >
      <p>testing</p>
    </div>
  </div>
</template>

<style scoped>
.border {
  border-top: 1px solid var(--indigo-900, #312e81);
  border-right: 1px solid var(--indigo-900, #312e81);
  border-bottom: 3px solid var(--indigo-900, #312e81);
  border-left: 1px solid var(--indigo-900, #312e81);
}

.red {
  background-color: red;
}
</style>
