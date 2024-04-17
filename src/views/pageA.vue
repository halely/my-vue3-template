<script lang="ts" setup>
import theme from '@/store/module/theme';
import publicApi from '@/api/modules';
const myTheme = theme();
setTimeout(() => {
  myTheme.setTheme('赪紫色', '#8a1874');
}, 2000);
ElMessage.success('hello');
const getLogin=async()=>{
  let res=await publicApi.postVerification({});
  console.log(res)
}
const getTableList=async()=>{
  let res=await publicApi.getTableList({});
  console.log(res)
}
getLogin()
getTableList()
</script>
<template>
  <div>
    <div class="hale-text">
      <span>测试block</span>
      <span class="hale-text__inner">测试element</span>
      <span class="hale-text--primary">测试modifier</span>
    </div>
    <i-material-symbols-16mp-rounded class="material " />
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
@include B(text){
  color: red;
  @include E(inner){
    color: green;
  }
  @include M(primary){
    color: blue;
  }
}


</style>
