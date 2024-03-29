<script lang="ts" setup>
import theme from '@/store/module/theme';
const myTheme = theme();
setTimeout(() => {
  myTheme.setTheme('赪紫色', '#8a1874');
}, 2000);
</script>
<template>
  <div>
    <i-material-symbols-16mp-rounded class="material" />
    <i-clarity-bank-solid-alerted :style="{ color: myTheme.themeColor }" />
    <el-button type="primary" size="default">点击</el-button>
  </div>
</template>
<style scoped lang="scss">
.material {
  color: $theme-color;
  font-size: 15px;
  margin-right: 10px;
}
</style>
