import React, { Component } from 'react'
import ReactModal from 'react-modal'

import Colors from '../../../themes/Colors'
import CloseIcon from '../../../icons/CloseIcon'

import { CloseIconWrapper } from './styledComponents'
import './styles.css'

interface Props {
   children: React.ReactNode
   hideCloseIcon?: boolean
   [x: string]: any
}

interface State {
   modalIsOpen: boolean
}

ReactModal.defaultStyles.overlay.backgroundColor = Colors.black80

class BaseModalContainer extends Component<Props, State> {
   state = {
      modalIsOpen: false
   }

   static defaultProps = {
      hideCloseIcon: false
   }

   openModal = () => {
      this.setState({
         modalIsOpen: true
      })
   }

   closeModal = () => {
      this.setState({
         modalIsOpen: false
      })
   }

   UNSAFE_componentWillMount() {
      ReactModal.setAppElement('body')
   }

   onModalOpen = () => {
      document.body.style.overflow = 'hidden'
   }
   onModalClose = () => {
      document.body.removeAttribute('style')
   }

   render() {
      const { children, hideCloseIcon, ...other } = this.props
      const { modalIsOpen } = this.state

      return (
         <ReactModal
            className={'baseModalStyles'}
            overlayClassName={'baseModalOverlayStyles'}
            closeTimeoutMS={0}
            isOpen={modalIsOpen}
            onAfterOpen={this.onModalOpen}
            onAfterClose={this.onModalClose}
            {...other}
         >
            {hideCloseIcon ? null : (
               <CloseIconWrapper onClick={this.closeModal}>
                  <CloseIcon fill={Colors.blueGreyTwo} />
               </CloseIconWrapper>
            )}

            {children}
         </ReactModal>
      )
   }
}

export default BaseModalContainer
