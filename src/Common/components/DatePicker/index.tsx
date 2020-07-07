import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action, computed } from 'mobx'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'styled-components/macro'

import { DATE_PICKER_DATE_FORMAT } from '../../constants/DateConstants'

import ErrorMessage from '../ErrorMessage'

import { DateContainer } from './styledComponents'
import { ValidationResponseType } from './types'
import './styles.css'

interface DatePickerProps extends WithTranslation {
   onSelectedDate: (date: Date) => void

   containerClassName?: string
   containerCSS?: string

   date: Date
   validate?: () => ValidationResponseType
   disabled?: boolean

   [x: string]: any
}

@observer
class DatePicker extends Component<DatePickerProps> {
   datePickerRef
   @observable selectedDate: string

   constructor(props) {
      super(props)
      this.selectedDate = props.date
   }

   static defaultProps = {
      validate: () => ({ shouldShowError: false, errorMessage: '' }),
      disabled: false
   }

   @observable error = ''

   @action setError(errorText: string) {
      this.error = errorText
   }

   onBlur = () => {
      const { validate } = this.props
      if (validate) {
         const result = validate()
         if (result.shouldShowError) {
            this.setError(result.errorMessage)
         } else {
            this.setError('')
         }
      }
   }

   onFocus = () => {
      this.setError('')
   }

   @computed get isError() {
      return this.error !== ''
   }

   handleChange = date => {
      const { onSelectedDate } = this.props
      this.selectedDate = date
      if (onSelectedDate) {
         onSelectedDate(date)
      }
   }

   captureDatePickerRef = ref => {
      this.datePickerRef = ref
      if (this.datePickerRef && this.datePickerRef.input) {
         this.datePickerRef.input.readOnly = true
      }
   }

   render() {
      const {
         t,
         containerClassName,
         containerCSS,
         disabled,
         errorId,
         ...other
      } = this.props

      return (
         <DateContainer className={containerClassName} css={containerCSS}>
            <ReactDatePicker
               onFocus={this.onFocus}
               onBlur={this.onBlur}
               ref={this.captureDatePickerRef}
               selected={this.selectedDate}
               onChange={this.handleChange}
               showMonthDropdown
               showYearDropdown
               scrollableYearDropdown
               yearDropdownItemNumber={100}
               dateFormat={DATE_PICKER_DATE_FORMAT}
               placeholderText={t('common.datePicker.selectDate')}
               className={
                  !this.isError
                     ? disabled
                        ? 'dateFieldStyles dateFieldDisabled'
                        : 'dateFieldStyles'
                     : 'dateFieldStyles dateFieldStylesOnError'
               }
               maxDate={new Date()}
               isClearable={!disabled}
               disabled={disabled}
               {...other}
            />
            <ErrorMessage errorMessage={this.error} />
         </DateContainer>
      )
   }
}

export default withTranslation('translation', { withRef: true })(DatePicker)
