<script lang="ts" setup>
const dd=(info: any)=>{
  console.log(info)
}
</script>
<template>
  <el-container class="layout-container h-screen">
    <el-aside width="200px">
      <!-- 侧边栏 -->
    </el-aside>
    <el-container>
      <el-header>
        <!-- 顶部导航栏 -->
      </el-header>
      <el-main>
        <div v-resize-hale="dd" class="resizeBox"></div>
        <!-- 主体内容区域 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped lang="scss">
.resizeBox {
  background-color: aquamarine;
  resize: both;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  overflow: hidden;
}
</style>
