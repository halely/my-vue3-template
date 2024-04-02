//公共api接口
import axiosHttp from '@/api/http';

const publicApi = {
  // 验证登录实例
  postVerification: (params: object) => axiosHttp.post(`/login`, params),
  getTableList: (params: object) => axiosHttp.post(`/dataList`, params),
};

export default publicApi;
