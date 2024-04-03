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
    <i-material-symbols-16mp-rounded class="material" />
    <i-clarity-bank-solid-alerted :style="{ color: myTheme.themeColor }" />
    <el-button type="primary" size="default">点击</el-button>
    <div class="ribbon">Your text content</div>
  </div>
</template>
<style scoped lang="scss">
.material {
  color: $theme-color;
  font-size: 15px;
  margin-right: 10px;
}
/* HTML: <div class="ribbon">Your text content</div> */
.ribbon {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
}
.ribbon {
  --c: #2699dc;
  --r: 20%; /* control the cutout part */

  padding: .6em 1.3em; /* you may need to adjust this based on your content */
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  text-align: center;
  position: relative;
  z-index: 0;
  width: fit-content;
  box-sizing: border-box;
}
.ribbon:before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 60% 20% -40%;
  background: color-mix(in srgb, var(--c), #000 35%);
  clip-path: polygon(5% 0,95% 0,100% 100%,50% calc(100% - var(--r)),0 100%);
}
.ribbon:after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background: radial-gradient(35% 35%,#0000 96%,#0003 97% 99%,#0000) var(--c);
  clip-path: polygon(100.00% 50.00%,89.23% 57.80%,96.19% 69.13%,83.26% 72.22%,85.36% 85.36%,72.22% 83.26%,69.13% 96.19%,57.80% 89.23%,50.00% 100.00%,42.20% 89.23%,30.87% 96.19%,27.78% 83.26%,14.64% 85.36%,16.74% 72.22%,3.81% 69.13%,10.77% 57.80%,0.00% 50.00%,10.77% 42.20%,3.81% 30.87%,16.74% 27.78%,14.64% 14.64%,27.78% 16.74%,30.87% 3.81%,42.20% 10.77%,50.00% 0.00%,57.80% 10.77%,69.13% 3.81%,72.22% 16.74%,85.36% 14.64%,83.26% 27.78%,96.19% 30.87%,89.23% 42.20%); /* from https://css-generators.com/starburst-shape/ */
}
</style>
