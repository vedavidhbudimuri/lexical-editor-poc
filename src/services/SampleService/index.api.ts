import { create, ApisauceInstance } from 'apisauce'

import { apiMethods } from '../../constants/APIConstants'
import Config from '../../constants/EnvironmentConstants'
import { SampleApiResponse, SampleApiRequest } from '../../stores/types'

import endpoints from '../endpoints'

import SampleService from '.'

const AUTH_URL = `${Config.NKB_BASE_URL}nkb_auth/`

class SampleServiceApi implements SampleService {
   api: ApisauceInstance
   networkCallWithApisauce: Function

   constructor(networkCallWithApisauce: Function) {
      this.api = create({
         baseURL: AUTH_URL
      })
      this.networkCallWithApisauce = networkCallWithApisauce
   }

   getData(requestObject: SampleApiRequest): Promise<SampleApiResponse> {
      return this.networkCallWithApisauce(
         this.api,
         endpoints.loginOrRegister,
         requestObject,
         apiMethods.post
      )
   }
}

export default SampleServiceApi
