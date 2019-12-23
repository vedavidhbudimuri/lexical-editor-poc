//TODO: Need to update to ts
import getData from '@ib/api'
import { apiMethods } from '../constants/APIConstants'

export function getAuthAPIAuthorizationHeaders() {
   return {
      'Content-Type': 'application/json; charset=UTF-8'
   }
}

export const networkCallWithApisauce = async (
   api,
   url,
   requestObject,
   type = apiMethods.post
) => {
   let response: any = null
   try {
      response = await getData(api, url, requestObject, type)
   } catch (error) {
      throw error
   }
   return response
}
