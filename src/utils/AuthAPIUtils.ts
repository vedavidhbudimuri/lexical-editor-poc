//TODO: Need to update to ts
import getData from '@ib/api'
import { ApisauceInstance } from 'apisauce'

import { apiMethods } from '../common/constants/APIConstants'

export function getAuthAPIAuthorizationHeaders() {
   return {
      'Content-Type': 'application/json; charset=UTF-8'
   }
}

export const networkCallWithApisauce = async (
   api: ApisauceInstance,
   url: string,
   requestObject: Record<string, any>,
   type: any = apiMethods.post
) => await getData(api, url, requestObject, type)
