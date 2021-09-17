//TODO: Need to update to ts
import getData from '@ib/api'

import { apiMethods } from '../constants/APIConstants'

export function getAuthAPIAuthorizationHeaders() {
   return {
      'Content-Type': 'application/json; charset=UTF-8'
   }
}

export const networkCallWithApisauce = async <T, U>(
   api: any,
   url: string,
   requestObject: U,
   type: any = apiMethods.post
): Promise<T> => (await getData<T, U>(api, url, requestObject, type)) as T
