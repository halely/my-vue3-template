// src/api/http.ts
import axios, { type AxiosInstance, type InternalAxiosRequestConfig, type AxiosResponse, type AxiosError,type AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import showCodeMessage from '@/api/code';
import {UploadFileParams,ContentTypeEnum} from '@/api/type';

const BASE_PREFIX = '/';


// 创建实例
const service: AxiosInstance = axios.create({
  // 前缀
  baseURL: BASE_PREFIX,
  // 超时
  timeout: 1000 * 60 * 30,
  // 请求头
  headers: {
    'Content-Type': ContentTypeEnum.JSON,
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log('config',config)
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
      return response;
    }
    ElMessage.info(JSON.stringify(response.status));
    return response;
  },
  async (error: AxiosError) => {
    const { response } = error;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (response) {
      ElMessage.error(showCodeMessage(response.status));
      return await Promise.reject(response);
    }
    ElMessage.warning('网络连接异常,请稍后再试!');
    return await Promise.reject(error);
  },
);

const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T | null> => {
  try {
    const response = await service.get<T>(url, config);
    return response.data;
  } catch (err) {
    return null;
  }
};

const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T | null> => {
  try {
    const response = await service.post<T>(url, data, config);
    return response.data;
  } catch (err) {
    return null;
  }
};
/**
 * @description:  文件上传
*/
const uploadFile=async <T = any>(config: AxiosRequestConfig, params: UploadFileParams)=>{
  const formData = new window.FormData();
  const customFilename = params.name || 'file';

  if (params.filename) {
    formData.append(customFilename, params.file, params.filename);
  } else {
    formData.append(customFilename, params.file);
  }

  if (params.data) {
    Object.keys(params.data).forEach((key) => {
      const value = params.data![key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item);
        });
        return;
      }

      formData.append(key, params.data![key]);
    });
  }

  return service.request<T>({
    method: 'POST',
    data: formData,
    headers: {
      'Content-type': ContentTypeEnum.FORM_DATA,
      ignoreCancelToken: true,
    },
    ...config,
  });
}
export  {get,post,uploadFile};
