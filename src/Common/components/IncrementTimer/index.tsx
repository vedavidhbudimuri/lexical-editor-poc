import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import 'twin.macro'

import { getTimeFormat } from '../../utils/TimeUtils'

import { IncrementTimerContainer } from './styledComponents'

export interface IncrementTimerProps {
   timeInSeconds: number
   maxTime: number
   onComplete: () => void
   isFiniteTime: boolean
   renderTimer?: (seconds: number) => React.ReactElement
   onTimeUpdate: (totalSeconds: number) => void
   className: string
   containerCss: React.CSSProperties
}

@observer
class IncrementTimer extends Component<IncrementTimerProps> {
   @observable seconds: number
   timerId
   constructor(props) {
      super(props)
      this.seconds = props.timeInSeconds
   }

   static defaultProps = {
      onTimeUpdate: () => null,
      timeInSeconds: 0,
      isFiniteTime: false,
      maxTime: 1,
      className: '',
      containerCss: {},
      onComplete: () => null
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

   isCompleted = () => {
      const { maxTime } = this.props
      this.seconds >= maxTime && this.onComplete()
   }

   @action.bound
   setSeconds = () => {
      this.seconds += 1
      this.onTimeUpdate()
      const { isFiniteTime } = this.props
      isFiniteTime && this.isCompleted()
   }

   onComplete = () => {
      const { onComplete } = this.props
      clearInterval(this.timerId)
      onComplete()
   }

   render() {
      const { className, containerCss, renderTimer } = this.props
      return (
         <>
            {renderTimer ? (
               renderTimer(this.seconds)
            ) : (
               <IncrementTimerContainer
                  className={className}
                  css={containerCss}
               >
                  {getTimeFormat(this.seconds)}
               </IncrementTimerContainer>
            )}
         </>
      )
   }
}

export default IncrementTimer
