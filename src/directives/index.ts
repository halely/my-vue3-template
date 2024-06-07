import { App } from 'vue';
export async function setupDirectives(app: App) {
  let directiveList=import.meta.glob('./module/*.ts',{eager:true});
  for(const key in directiveList){
     const {setupFn}=await import(/* @vite-ignore */key);
     await setupFn(app)
  }
}
