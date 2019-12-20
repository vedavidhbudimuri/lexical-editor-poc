import { resolveWithTimeout } from '../../utils/TestUtils'
import sampleData from '../../fixtures/sample.json'
import { SampleApiResponse, SampleApiRequest } from '../../stores/types'

import SampleService from '.'

class SampleServiceFixture implements SampleService {
   getData(requestObject: SampleApiRequest): Promise<SampleApiResponse> {
      return resolveWithTimeout(sampleData)
   }
}

export default SampleServiceFixture
