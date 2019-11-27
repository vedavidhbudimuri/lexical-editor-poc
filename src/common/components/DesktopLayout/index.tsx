import React, { Component } from 'react'

import { LayoutContainer, DesktopLayoutBody } from './styledComponents'

interface DesktopLayoutProps {
   children: React.ReactNode
}

class DesktopLayout extends Component<DesktopLayoutProps> {
   render() {
      const { children } = this.props
      return (
         <LayoutContainer>
            <DesktopLayoutBody>{children}</DesktopLayoutBody>
         </LayoutContainer>
      )
   }
}

export default DesktopLayout
