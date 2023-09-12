<script setup lang="ts">
import { ref } from 'vue';

const something = ref({ something: String });
</script>

<template>
  <div>{{ something }}</div>
</template>
