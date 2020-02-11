import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import ConfirmAlertComponent from '../ConfirmAlertComponent'

interface Props {
   when?: boolean
   history: any
   routesToAllow: Array<string>
   message: string

   children?: React.ReactNode
}

@observer
class RouterPrompt extends Component<Props> {
   static defaultProps = {
      when: true,
      routesToAllow: []
   }
   @observable openModal: boolean
   @observable nextLocation: any

   constructor(props) {
      super(props)
      this.nextLocation = null
      this.openModal = false
   }

   componentDidMount() {
      this.block()
   }

   block = () => {
      this.props.history.block(nextLocation => {
         const { routesToAllow } = this.props
         let isRouteFound = 0
         if (routesToAllow.length > 0) {
            routesToAllow.forEach(route => {
               if (nextLocation.pathname.includes(route)) {
                  isRouteFound = 1
               }
            })
         }
         if (isRouteFound === 1) {
            return true
         }
         if (this.props.when) {
            this.openModal = true
            this.nextLocation = nextLocation
         }
         return !this.props.when
      })
   }

   unblock = () => {
      this.props.history.block(nextLocation => true)
   }
   componentWillUnmount() {
      this.unblock()
   }

   onCancel = () => {
      this.nextLocation = null
      this.openModal = false
   }

   onConfirm = () => {
      this.openModal = false
      this.navigateToNextLocation()
   }

   navigateToNextLocation = () => {
      this.unblock()
      this.props.history.goBack()
   }

   render() {
      const { message } = this.props

      return (
         <>
            {this.openModal && (
               <ConfirmAlertComponent
                  message={message}
                  onCancel={this.onCancel}
                  onConfirm={this.onConfirm}
                  onClose={() => {}}
               />
            )}
         </>
      )
   }
}

export default withRouter(RouterPrompt)
