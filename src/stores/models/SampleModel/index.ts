import { observable } from 'mobx'

import { SampleApiResponse } from '../../types'

class SampleModel {
   @observable isProfileUpdated!: boolean
   @observable isNewUser!: boolean

   constructor(authFlowDecidingInfo: SampleApiResponse) {
      const { is_profile_updated, is_new_user } = authFlowDecidingInfo
      this.isProfileUpdated = is_profile_updated
      this.isNewUser = is_new_user
   }
}

export default SampleModel
