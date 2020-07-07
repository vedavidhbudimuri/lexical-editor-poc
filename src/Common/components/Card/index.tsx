import * as React from 'react'
import { observer } from 'mobx-react'
import 'styled-components/macro'

import { CardContainer } from './styledComponents'

interface CardProps {
   onClick?: () => any
   className?: string
   testId?: string
   cardCss?: React.CSSProperties
}

@observer
class Card extends React.Component<CardProps> {
   static defaultProps = {
      onClick: () => {},
      testId: 'card'
   }

   render() {
      const {
         onClick,
         className,
         children,
         testId,
         cardCss,
         ...otherProps
      } = this.props
      return (
         <CardContainer
            onClick={onClick}
            data-testid={testId}
            className={className}
            css={cardCss}
            {...otherProps}
         >
            {children}
         </CardContainer>
      )
   }
}

export default Card
