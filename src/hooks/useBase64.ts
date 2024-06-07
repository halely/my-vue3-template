
import { onMounted } from "vue";
interface UseBase64Options {
  el:string
}

export default function useBase64(options:UseBase64Options):Promise<{base64url:string}> {
  return new Promise((resolve) => {
    onMounted(() => {
      let imgEl:HTMLImageElement=document.querySelector(options.el) as HTMLImageElement;

      imgEl.onload = () => {
         {
           resolve({
             base64url: setBase64(imgEl)
           });
         }
      }
      const setBase64 = (el:HTMLImageElement) => {
       const canvas = document.createElement('canvas');
       const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
       canvas.width = el.width;
       canvas.height = el.height;
       ctx.drawImage(el, 0, 0, canvas.width, canvas.height);
       let suffix:string =el.src.substring(el.src.lastIndexOf(".")+1);
       return canvas.toDataURL(`image/${suffix}`);
    };
    })

  })

}
