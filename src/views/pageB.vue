<script lang="ts" setup></script>
<template>
  <div
    style="animation: slideInFromLeft 1s ease-out"
    class="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
  >
    <h2 style="animation: appear 2s ease-out" class="text-center text-4xl font-extrabold text-white">Welcome</h2>
    <p style="animation: appear 3s ease-out" class="text-center text-gray-200">Sign in to your account</p>
    <form method="POST" action="#" class="space-y-6">
      <div class="relative">
        <input
          placeholder="john@example.com"
          class="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
          id="email"
          name="email"
          type="email"
        />
        <label
          class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
          for="email"
          >Email address</label
        >
      </div>
      <div class="relative">
        <input
          placeholder="Password"
          class="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
          id="password"
          name="password"
          type="password"
        />
        <label
          class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
          for="password"
          >Password</label
        >
      </div>
      <div class="flex items-center justify-between">
        <label class="flex items-center text-sm text-gray-200">
          <input class="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded" type="checkbox" />
          <span class="ml-2">Remember me</span>
        </label>
        <a class="text-sm text-purple-200 hover:underline" href="#">Forgot your password?</a>
      </div>
      <button
        class="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
        type="submit"
      >
        Sign In
      </button>
    </form>
    <div class="text-center text-gray-300">
      Don't have an account?
      <a class="text-purple-300 hover:underline" href="#">Sign up</a>
    </div>
  </div>
  <div class="loader"></div>
</template>
<style lang="scss" scoped>
.loader {
  width: 48px;
  height: 48px;
  margin: auto;
  position: relative;
}

.loader:before {
  content: '';
  width: 48px;
  height: 5px;
  background: #f0808050;
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  animation: shadow324 0.5s linear infinite;
}

.loader:after {
  content: '';
  width: 100%;
  height: 100%;
  background: #f08080;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  animation: jump7456 0.5s linear infinite;
}

@keyframes jump7456 {
  15% {
    border-bottom-right-radius: 3px;
  }

  25% {
    transform: translateY(9px) rotate(22.5deg);
  }

  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }

  75% {
    transform: translateY(9px) rotate(67.5deg);
  }

  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow324 {
  0%,
  100% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.2, 1);
  }
}
</style>
