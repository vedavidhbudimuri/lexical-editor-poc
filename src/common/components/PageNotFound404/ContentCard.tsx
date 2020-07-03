import * as React from 'react'
// eslint-disable-next-line import/named
import { withTranslation, WithTranslation } from 'react-i18next'

import { HOME_SCREEN_PATH } from '../../constants/NavigationConstants'

import {
   Heading,
   SecondHeading,
   Description,
   HomeButton
} from './styledComponents'

class ContentCard extends React.Component<WithTranslation> {
   render() {
      const { t } = this.props
      return (
         <div>
            <Heading as='div'>{t('pageNotFound.404')} </Heading>
            <SecondHeading as='div'>
               {t('pageNotFound.pageNotFoundText')}
            </SecondHeading>
            <Description as='div'>
               {t('pageNotFound.noManPlaceText')}
            </Description>

            <HomeButton as='a' href={HOME_SCREEN_PATH}>
               {t('pageNotFound.goHome')}
            </HomeButton>
         </div>
      )
   }
}

export default withTranslation()(ContentCard)
