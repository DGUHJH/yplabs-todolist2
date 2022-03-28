import axios from 'axios';
import {requestUrl} from './url';

export type RequestType = 'post' | 'get' | 'patch' | 'delete';

export const hAxios = (url: string, type: RequestType, data?: any) =>
  axios[type](`${requestUrl}${url}`, data);
