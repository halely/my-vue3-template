import {intersection} from '@pureadmin/utils';
//await 调用监听错误
export const awaitWrap = (promise:Promise<any>) => {
  return promise.then((data) => [data, null]).catch((err) => [null, err]);
};

/** 判断两个数组彼此是否存在相同值 */
export const isOneOfArray=(a: Array<string>, b: Array<string>)=>{
  return Array.isArray(a) && Array.isArray(b)
    ? intersection(a, b).length > 0
      ? true
      : false
    : true;
}
