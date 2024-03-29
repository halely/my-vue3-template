<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(0);
</script>
<template>
  <div>
    <el-slider style="width: 200px" v-model="value" />
  </div>
</template>
<style scoped></style>
