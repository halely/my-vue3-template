export interface DataInfo<T>{
  /** token */
  accessToken: string;
  /** 用户名 */
  userName?: string;
   /** `accessToken`的过期时间（时间戳） */
  expires?: T;
     /**用户id */
  userId?:string,
  /** 当前登陆用户的角色 */
  roles?: Array<string>;
}


