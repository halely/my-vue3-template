//公共api接口
import {post} from '@/api/http';
import {UserResult} from '@/api/type';
//登录
export const getLogin=(params?: object) => post<UserResult>(`/login`, params);
//获取表格数据
export const getTableList=(params?: object) => post(`/dataList`, params);
