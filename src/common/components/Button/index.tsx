import * as React from 'react'

import { StyledButton, StyledText } from './styledComponents'

interface ButtonProps {
   text?: string
   onClick: () => any
   className: string
   disabled: boolean
   textComponent: React.ElementType
   textClassName?: string
   id?: string
   children?: React.ReactNode
}

class Button extends React.Component<ButtonProps> {
   static defaultProps = {
      disabled: false,
      textComponent: StyledText,
      textClassName: '',
      className: ''
   }

   render() {
      const {
         onClick,
         disabled,
         className,
         text,
         id,
         children,
         textComponent: ButtonText,
         ...otherProps
      } = this.props
      return (
         <StyledButton
            onClick={onClick}
            disabled={disabled}
            className={className}
            id={id}
            {...otherProps}
         >
            {children ? children : <ButtonText>{text}</ButtonText>}
         </StyledButton>
      )
   }
}

export default Button
