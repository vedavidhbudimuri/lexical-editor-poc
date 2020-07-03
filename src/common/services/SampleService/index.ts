import { SampleApiResponse, SampleApiRequest } from '../../stores/types'

interface SampleService {
   getData(requestObject: SampleApiRequest): Promise<SampleApiResponse>
}

export default SampleService
