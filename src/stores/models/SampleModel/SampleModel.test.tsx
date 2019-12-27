import SampleModel from '.'

describe('SampleModel model test cases', () => {
   const authFlowDecidingInfo = {
      is_profile_updated: true,
      is_new_user: false
   }
   const sampleModel = new SampleModel(authFlowDecidingInfo)

   it('should test sample model is initialiser', () => {
      expect(sampleModel.isProfileUpdated).toBe(true)
      expect(sampleModel.isNewUser).toBe(false)
   })
})
