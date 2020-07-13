import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import 'twin.macro'

import { getTimeFormat } from '../../utils/TimeUtils'

import { DecrementTimerContainer } from './styledComponents'

export interface DecrementTimerProps {
   timeInSeconds: number
   onTimeUpdate: (totalSeconds: number) => void
   renderTimer?: (seconds: number) => React.ReactNode
   onComplete: () => void
   className: string
   containerCss: React.CSSProperties
}

@observer
class DecrementTimer extends Component<DecrementTimerProps> {
   @observable seconds: number
   timerId
   constructor(props) {
      super(props)
      this.seconds = props.timeInSeconds
   }

   static defaultProps = {
      onTimeUpdate: () => {},
      className: '',
      containerCss: {}
   }

   componentDidMount() {
      this.timerId = setInterval(this.setSeconds, 1000)
   }

   componentWillUnmount() {
      clearInterval(this.timerId)
   }

   getCurrentTime = (): number => this.seconds

   onTimeUpdate = () => {
      const { onTimeUpdate } = this.props
      onTimeUpdate(this.seconds)
   }

   onComplete = () => {
      const { onComplete } = this.props
      clearInterval(this.timerId)
      onComplete()
   }

   isCompleted = () => {
      this.seconds === 0 && this.onComplete()
   }

   @action.bound
   setSeconds = () => {
      if (this.seconds !== 0) {
         this.seconds -= 1
      }
      this.onTimeUpdate()
      this.isCompleted()
   }

   render() {
      const { className, containerCss, renderTimer } = this.props
      return (
         <>
            {renderTimer ? (
               renderTimer(this.seconds)
            ) : (
               <DecrementTimerContainer
                  className={className}
                  css={containerCss}
               >
                  {getTimeFormat(this.seconds)}
               </DecrementTimerContainer>
            )}
         </>
      )
   }
}

export default DecrementTimer
