<script lang="ts" setup>
const videoWidth = 500;
const videoHeight = 400;
let canvasDom: any = null;
let context_2d: any = null;
let videoDom: any = null;
let imgSrc = ref<any[]>([]);
const getCompetence = () => {
  nextTick(() => {
    canvasDom = document.getElementById("canvasCamera") as HTMLCanvasElement;
    context_2d = canvasDom?.getContext("2d") as CanvasRenderingContext2D;
    videoDom = document.getElementById("videoCamera") as HTMLVideoElement;
    let navigatorExample = navigator as any;//防止ts报错
    console.log(navigatorExample);

    if (navigatorExample.mediaDevices??''=='') {
      navigatorExample.menavigatordiaDevices = {};
    }
    if (navigatorExample.mediaDevices?.getUserMedia??''=='') {
      navigatorExample.mediaDevices.getUserMedia = function (constraints: any) {
        let getUserMedia =
          navigatorExample.webkitGetUserMedia ||
          navigatorExample.mozGetUserMedia ||
          navigatorExample.getUserMedia;
        if (!getUserMedia) {
          return Promise.reject(
            new Error("getUserMedia在这个浏览器中没有实现,请检查当前协议是否是https或者是localhost是否开启")
          );
        }
        return new Promise(function (resolve, reject) {
          getUserMedia.call(navigatorExample, constraints, resolve, reject);
        });
      };


    }
    const constraints = {
      audio: false,
      video: {
        width: videoWidth,
        height: videoHeight,
        transform: "scaleX(-1)",
      },
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream:any) {
        if ("srcObject" in videoDom) {
          videoDom.srcObject = stream;
        } else {
          videoDom.src = window.URL.createObjectURL(stream);
        }
        videoDom.onloadedmetadata = function () {
          videoDom.play();
        };
      })
      .catch(() => {
        ElMessage.error('没有开启摄像头权限或浏览器版本不兼容.')
      });


  })
}
const drawImage = () => {
  context_2d.drawImage(
    videoDom,
    0,
    0,
    videoWidth,
    videoHeight
  );
  // 获取图片base64链接

  const newImgSrc = canvasDom.toDataURL("image/png");
  imgSrc.value.push(newImgSrc);
}
const closeVideo=()=>{
	videoDom.srcObject.getTracks()[0].stop();
}

</script>
<template>

  <video id="videoCamera" class="canvas" :width="videoWidth" :height="videoHeight" autoPlay></video>
  <canvas id="canvasCamera" class="canvas" :width="videoWidth" :height="videoHeight" style="display: none;"></canvas>
  <div class="operationBox">
    <el-button @click="getCompetence" type="success" size="default">开启摄像头</el-button>
    <el-button @click="closeVideo" type="danger" size="default">关闭摄像头</el-button>
    <el-button @click="drawImage" type="primary" size="default">拍照</el-button>
    <el-button @click="imgSrc=[]" type="warning" size="default">清空</el-button>
    <div class="imgMainBox">
      <el-image style="width: 200px;height: 200px" v-for="(url, index) in imgSrc" :key="index" :src="url" :preview-src-list="imgSrc" fit="fill"  :initial-index="index" :lazy="true"></el-image>
    </div>

  </div>

</template>
<style scoped>
.operationBox {
  margin-top: 10px;
}
.imgMainBox{
  display: flex;
  gap:10px;
  flex-wrap: wrap;
  margin-top: 10px
}
</style>
