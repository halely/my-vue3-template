<script lang="ts" setup>
</script>
<template>
  <el-container class="layout-container h-screen">
    <el-aside width="200px">
      <!-- 侧边栏 -->
      侧边栏
    </el-aside>
    <el-container>
      <el-header>
        <!-- 顶部导航栏 -->
        顶部导航栏
      </el-header>
      <el-main >
        <!-- 主体内容区域 -->
        主体内容区域
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped lang="scss"></style>
