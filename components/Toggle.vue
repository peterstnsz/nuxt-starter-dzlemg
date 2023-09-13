<script lang="ts">
export default {
  inheritAttrs: false,
  props: ['itemName'],
};
</script>


<template>
  <input type="checkbox" class="hidden" />
  <div>
    <p
      class="w-[256px] p-4 border bg-yellow-50 rounded-[4px] flex flex-row justify-center items-center hover:bg-indigo-900 hover:text-zinc-50 text-zinc-800 cursor-pointer transition-all"
    >
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
