import * as React from 'react'
// eslint-disable-next-line import/named
import { withTranslation, WithTranslation } from 'react-i18next'

import {
   Container,
   TopSectionBackground,
   TopSection,
   InfoSection,
   InfoMobileSection,
   ImageSection,
   BottomSection,
   MobileHeading,
   MobileSubHeading
} from './styledComponents'
import ContentCard from './ContentCard'

class PageNotFound extends React.Component<WithTranslation> {
   render() {
      const { t } = this.props
      return (
         <section>
            <Container>
               <TopSectionBackground>
                  <TopSection>
                     <InfoSection>
                        <ContentCard />
                     </InfoSection>
                     <div>
                        <MobileHeading as='div'>
                           {t('pageNotFound.404')}
                        </MobileHeading>
                        <MobileSubHeading as='div'>
                           {t('pageNotFound.pageNotFoundText')}
                        </MobileSubHeading>
                     </div>
                     <ImageSection
                        src='https://s3-ap-southeast-1.amazonaws.com/ibhubs-media-files/404-page/404-door.png'
                        alt={t('pageNotFound.imageAlt')}
                     />
                  </TopSection>
               </TopSectionBackground>
               <BottomSection>
                  <InfoMobileSection>
                     <ContentCard />
                  </InfoMobileSection>
               </BottomSection>
            </Container>
         </section>
      )
   }
}

export default withTranslation()(PageNotFound)
