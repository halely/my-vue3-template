// src/api/http.ts
import axios, { type AxiosInstance, type InternalAxiosRequestConfig, type AxiosResponse, type AxiosError } from 'axios';
import { ElMessage } from 'element-plus';
import showCodeMessage from '@/api/code';

const BASE_PREFIX = '/';

// 创建实例
const service: AxiosInstance = axios.create({
  // 前缀
  baseURL: BASE_PREFIX,
  // 超时
  timeout: 1000 * 60 * 30,
  // 请求头
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // TODO 在这里可以加上想要在请求发送前处理的逻辑
    // TODO 比如 loading 等
    return config;
  },
  async (error: AxiosError) => {
    return await Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    }
    ElMessage.info(JSON.stringify(response.status));
    return response;
  },
  async (error: AxiosError) => {
    const { response } = error;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (response) {
      ElMessage.error(showCodeMessage(response.status));
      return await Promise.reject(response.data);
    }
    ElMessage.warning('网络连接异常,请稍后再试!');
    return await Promise.reject(error);
  },
);

export default service;
