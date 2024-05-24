import { App } from 'vue';
export async function setupFn(app: App) {
  //封装一个img图片懒加载功能

  app.directive('lazy', {
    async mounted(el: HTMLImageElement,binding) {
      let lazyUrl = await import('@/assets/img/img-lazy.gif')
      el.src = lazyUrl.default;
      //监听元素是否进入可视区域
     let observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0 && entries[0].isIntersecting) {
            const img = new Image();
            img.src =binding.value;
            img.onload = () => {
                el.src =binding.value;
                observer.unobserve(el)
            };
        }
      })
      observer.observe(el)
    },
  });
}
