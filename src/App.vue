<script setup lang="ts">
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<style>
@import './assets/css/nprogress.scss';
@import './assets/css/reset.scss';
</style>
