declare interface codeMessageMapTypes {
  400: string;
  401: string;
  403: string;
  404: string;
  405: string;
  408: string;
  500: string;
  501: string;
  502: string;
  503: string;
  504: string;
  505: string;
  [key: string]: string;
}

const codeMessageMap: codeMessageMapTypes = {
  400: '[400]:请求参数错误',
  401: '[401]:账户未登录',
  403: '[403]:拒绝访问',
  404: '[404]:请求路径错误',
  405: '[405]:请求方法错误',
  408: '[408]:网络请求超时',
  500: '[500]:服务器错误',
  501: '[501]:服务未实现',
  502: '[502]:网关错误',
  503: '[503]:服务不可用',
  504: '[504]:网关超时',
  505: '[505]:HTTP版本不受支持',
};

const showCodeMessage = (code: number | string): string => {
  return codeMessageMap[JSON.stringify(code)] ?? '网络连接异常,请稍后再试!';
};

export default showCodeMessage;
