import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action, computed } from 'mobx'
import { withTranslation, WithTranslation } from 'react-i18next'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { DATE_PICKER_DATE_FORMAT } from '../../../constants/DateConstants'

import ErrorMessage from '../ErrorMessage'

import { ValidationResponseType } from './types'
import { DateContainer } from './styledComponents'
import './styles.css'

interface DatePickerProps extends WithTranslation {
   onSelectedDate: (date: Date) => void
   date: Date
   validate?: () => ValidationResponseType

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
      validate: () => ({ shouldShowError: false, errorMessage: '' })
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
      onSelectedDate(date)
   }

   captureDatePickerRef = ref => {
      this.datePickerRef = ref
      if (this.datePickerRef && this.datePickerRef.input) {
         this.datePickerRef.input.readOnly = true
      }
   }

   render() {
      const { t, ...other } = this.props

      return (
         <DateContainer>
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
               placeholderText={t('en:common.datePicker.selectDate')}
               className={
                  this.isError
                     ? 'dateFieldStyles dateFieldStylesOnError'
                     : 'dateFieldStyles'
               }
               maxDate={new Date()}
               isClearable
               {...other}
            />
            {<ErrorMessage errorMessage={this.error} />}
         </DateContainer>
      )
   }
}

export default withTranslation('translation', { withRef: true })(DatePicker)
