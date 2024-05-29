import {defineStore} from 'pinia';
import { type DataInfo} from "./type";
import { type UserResult} from "@/api/type";
import {storageLocal} from '@pureadmin/utils';
import {getLogin} from '@/api/modules';
import {setToken,sessionKey} from '@/utils/auth';
const userStore = defineStore('app-user', {
   state: () => {
      return {
         userName:storageLocal().getItem<DataInfo<string>>(sessionKey)?.userName ?? "",
         roles: storageLocal().getItem<DataInfo<string>>(sessionKey)?.roles ?? []
      }
   },
   actions:{
    /** 存储用户名 */
    SET_USERNAME(userName: string) {
      this.userName = userName;
    },
    /** 存储角色 */
    SET_ROLES(roles: Array<string>) {
      this.roles = roles;
    },
    /** 登入 */
    async loginByUsername(loginParams: object | undefined) {
      return new Promise<UserResult>((resolve, reject) => {
         getLogin(loginParams)
          .then(data => {
            if (data) {
              setToken(data.data);
              this.SET_USERNAME(data.data.userName);
              this.SET_ROLES(data.data.roles);
              resolve(data);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
   }
})

export default userStore;
