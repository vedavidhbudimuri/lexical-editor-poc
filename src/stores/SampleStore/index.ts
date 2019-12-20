import { observable, action } from 'mobx'
import { APIStatus, API_INITIAL } from '@ib/api-constants'

import { bindPromiseWithOnSuccess } from '../../utils/MobxPromise'
import SampleService from '../../services/SampleService'

import { SampleApiResponse, SampleApiRequest } from '../types'
import SampleModel from '../models/SampleModel'

class SampleStore {
   @observable sampleApiStatus: APIStatus = API_INITIAL
   @observable sampleApiError: any
   sampleService: SampleService
   @observable authFlowDecidingInfo!: SampleModel

   constructor(service: SampleService) {
      this.sampleService = service
   }

   @action.bound
   setSampleApiStatus(status: APIStatus) {
      this.sampleApiStatus = status
   }

   @action.bound
   setSampleApiResponse(response: SampleApiResponse) {
      this.authFlowDecidingInfo = new SampleModel(response)
   }

   @action.bound
   setSampleApiError(error: any) {
      this.sampleApiError = error
   }

   getData(requestObject: SampleApiRequest) {
      const getDataPromise = this.sampleService.getData(requestObject)
      return bindPromiseWithOnSuccess(getDataPromise)
         .to(this.setSampleApiStatus, response => {
            this.setSampleApiResponse(response as SampleApiResponse)
         })
         .catch(this.setSampleApiError)
   }
}

export default SampleStore
