<script lang="ts" setup>
import ExploreSvg from '@/assets/svg/explore.svg?component';
import saveMoney from '@/assets/svg/saveMoney.svg?component';
import userStore from '@/store/module/user';
let router = useRouter();
const user = userStore();
const toLogin = async () => {
  let params = {
    account: loginInfo.account,
    password: loginInfo.password
  }
  let res = await user.loginByUsername(params);
  if(res.code=='1001'){

  }
  router.replace({
    path: "/"
  })
}
const loginInfo = reactive({
  account: '',
  password: ''
})
</script>
<template>
  <div class="hale-login">
    <img class="hale-login__bg" src="../../assets/img/login_bg.png">
    <div class="hale-login__content">
      <div class="hale-login__img">
        <ExploreSvg class="w-140" />
      </div>
      <div class="hale-login__form">
        <div class="flex flex-col items-center justify-center h-screen">
          <saveMoney class="w-25 animate-bounce" />
          <div class="w-full max-w-md bg-white rounded-lg  p-6 pt-0">
            <h2 class="text-center uppercase my-4 text-stone-400">haleAdmin</h2>
            <div class="flex flex-col" onsubmit="javascript: return false;">
              <input type="email"
                class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="账号" v-model="loginInfo.account">
              <input type="password"
                class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="密码" v-model="loginInfo.password">
              <div class="flex items-center justify-between flex-wrap">
                <label for="remember-me" class="text-sm text-gray-900 cursor-pointer">
                  <input type="checkbox" id="remember-me" class="mr-2">
                  记住账号
                </label>
                <a class="text-sm text-blue-500 hover:underline mb-0.5">忘记密码?</a>
                <p class="text-gray-900 mt-4 w-100"> 没有账户?<a
                    class="text-sm text-blue-500 -200 hover:underline mt-4 ml-1">注册</a></p>
              </div>
              <button
                class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                @click="toLogin">登录</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@include B(login) {
  height: 100%;


  @include E(bg) {
    position: fixed;
    height: 100%;
    z-index: -1;
    max-width: 100%;
  }

  @include E(content) {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 18rem;
    padding: 0 2rem;
  }

  @include E(img) {
    @include flexCenter;
    justify-content: flex-end;
  }

  @include E(form) {
    h2 {
      font: bold 200% Consolas, Monaco, monospace;
    }
  }
}
</style>
