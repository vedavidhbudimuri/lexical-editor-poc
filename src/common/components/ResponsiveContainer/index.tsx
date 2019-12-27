import React, { Component } from 'react'

import { MainContainer } from './styledComponents'

interface ResponsiveContainerProps {
   children: React.ReactNode
   className?: string
}

class ResponsiveContainer extends Component<ResponsiveContainerProps> {
   static defaultProps = {
      className: ''
   }

   render() {
      const { children, className } = this.props
      return <MainContainer className={className}>{children}</MainContainer>
   }
}

export default ResponsiveContainer
