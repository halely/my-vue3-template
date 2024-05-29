import {type DataInfo} from "@/store/module/type";
import {storageLocal} from '@pureadmin/utils';
export const sessionKey = "USER-INFO";
export const TokenKey = "ACCESS-TOKEN";
// 设置token
export function setToken(data: DataInfo<Date>) {
  let expiresVal = 0;
  const { accessToken,expires} = data;
  //如果没有就默认没有
  //如果后端直接设置时间戳，将此处代码改为expires = data.expires，然后把上面的DataInfo<Date>改成DataInfo<number>即可
  if(expires) expiresVal = new Date(expires).getTime() + 3 * 60 * 1000;//mock时间往后延迟了3分钟
  storageLocal().setItem(TokenKey, { accessToken, expires:expiresVal });
  storageLocal().setItem(sessionKey,data)
}

// 获取token
export function getToken(def:any = null) {
  try{
    let {accessToken,expires}=storageLocal().getItem<DataInfo<Date>>(TokenKey) as {accessToken?:string,expires?:number};
    //假如accessToken过期时间（时间戳）小于当前时间（时间戳）就返回默认值
    if(!expires || expires >= new Date().getTime()) {
      return accessToken;
    }else{
      return def;
    }
  }catch{
    return def;
  }
}
// 删除token
export function removeToken() {
  storageLocal().removeItem(TokenKey);
  storageLocal().clear();
}

