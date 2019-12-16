//TODO: Need to update to ts

import { apiMethods } from '../constants/APIConstants'

import { statusCodes } from '../constants/APIErrorConstants'

export function getAuthAPIAuthorizationHeaders() {
   return {
      'Content-Type': 'application/json; charset=UTF-8'
   }
}

export async function getData<T, U>(
   api: any,
   path: string,
   requestObject: U,
   type = 'POST'
): Promise<any> {
   let isConnected = false
   try {
      isConnected = await Promise.resolve(navigator.onLine)
   } catch (e) {
      return Promise.reject(new Error(JSON.stringify({})))
   }
   if (isConnected === true) {
      let response: any
      const formattedrequestObject: string = JSON.stringify(
         JSON.stringify(requestObject)
      )
      const dataRequestObject: string = JSON.stringify({
         data: formattedrequestObject,
         clientKeyDetailsId: 1
      })
      switch (type) {
         case 'POST':
            response = await api.post(path, dataRequestObject)
            if (response.ok === false) {
               throw Error(JSON.stringify(response))
            }
            return response.data
         case 'GET':
            response = await api.get(path)
            if (response.ok === false) {
               throw Error(JSON.stringify(response))
            }
            return response.data
         case 'PUT':
            response = await api.put(path, dataRequestObject)
            if (response.ok === false) {
               throw Error(JSON.stringify(response.data))
            }
            return response.data
         case 'DELETE':
            response = await api.delete(path)
            if (response.ok === false) {
               throw Error(JSON.stringify(response.data))
            }
            return response.data
         default:
      }
   } else {
      const response = {
         ok: false,
         config: {},
         duration: 0,
         headers: {},
         problem: 'NETWORK_DISCONNECTED',
         status: statusCodes.noInternetErrorCode,
         data: {
            res_status: '',
            response: '',
            http_status_code: statusCodes.noInternetErrorCode
         }
      }
      throw Error(JSON.stringify(response))
   }
   return Promise.resolve(null)
}

export const networkCallWithApisauce = async (
   api,
   url,
   requestObject,
   type = apiMethods.post
) => {
   let response = null
   try {
      response = await getData(api, url, requestObject, type)
   } catch (error) {
      throw error
   }
   return response
}
