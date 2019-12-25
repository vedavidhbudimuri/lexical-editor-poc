import { API_INITIAL, API_SUCCESS } from '@ib/api-constants'

import SampleFixture from '../../services/SampleService/index.fixture'

import SampleStore from '.'

describe('SampleStore component test cases', () => {
   let sampleStore
   beforeEach(() => {
      sampleStore = new SampleStore(new SampleFixture())
   })
   it('should login with user credentials and get login response', () => {
      const userPhoneNumberDetails = {
         phone_number: '9908001132',
         country_code: '+91'
      }

      return sampleStore.getData(userPhoneNumberDetails).then(() => {
         expect(sampleStore.sampleApiStatus).toBe(API_SUCCESS)
         expect(sampleStore.authFlowDecidingInfo.isNewUser).toBe(false)
      })
   })
})
