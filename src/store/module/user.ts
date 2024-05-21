import {defineStore} from 'pinia';
import { type DataInfo} from "./type";
import { type UserResult} from "@/api/type";
import {storageSession} from '@pureadmin/utils';
import {getLogin} from '@/api/modules';
const userStore = defineStore('app-user', {
   state: () => {
      return {
         token: storageSession().getItem('ACCESS-TOKEN') ?? "",
         userName:storageSession().getItem<DataInfo>('USER-iNFO')?.userName ?? "",
         roles: storageSession().getItem<DataInfo>('USER-iNFO')?.roles ?? []
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
