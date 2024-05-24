<script lang="ts" setup>
const imgList = [
  'https://images4.alphacoders.com/135/thumbbig-1353792.webp',
  'https://free4kwallpapers.com/uploads/wallpaper-cache/%CE%B2onsai@xmas-wallpaper-400x270-MM-100.jpg',
   'https://free4kwallpapers.com/uploads/wallpaper-cache/waterfall-wallpaper-400x270-MM-100.jpg',
   'https://free4kwallpapers.com/uploads/wallpaper-cache/fuji-castle-gardens-wallpaper-400x270-MM-100.jpg',
   'https://free4kwallpapers.com/uploads/wallpaper-cache/new-beginnings-wallpaper-400x270-MM-100.jpg',
   'https://free4kwallpapers.com/uploads/wallpaper-cache/landscape-wallpaper-400x270-MM-100.jpg',
   ]
</script>
<template>
  <el-container class="layout-container h-screen">
    <el-aside width="200px">
      <!-- 侧边栏 -->
      侧边栏
      <img v-for="(item,index) in imgList" :key="index" v-lazy="item">
    </el-aside>
    <el-container>
      <el-header>
        <!-- 顶部导航栏 -->
        顶部导航栏
      </el-header>
      <el-main>
        <!-- 主体内容区域 -->
        主体内容区域
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped lang="scss"></style>
