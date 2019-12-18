import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CheckBox from '.'

class CheckBoxRef extends Component {
   ref
   constructor(props) {
      super(props)
      this.ref = React.createRef()
   }
   getSelectedValues = () => this.ref.current.getSelectedValues()

   render() {
      return (
         <div>
            <button onClick={this.getSelectedValues}>Get Values</button>
            <CheckBox
               options={[
                  { label: 'Male', value: 'Male' },
                  { label: 'Female', value: 'Female' },
                  { label: 'Others', value: 'Others' }
               ]}
               selectedValue={'Female'}
               onSelectOption={action('selected')}
               ref={this.ref}
            />
         </div>
      )
   }
}
storiesOf('CheckBox', module)
   .add('checkbox buttons', () => (
      <CheckBox
         options={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Others', value: 'Others' }
         ]}
         onSelectOption={action('selected')}
      />
   ))
   .add('buttons enabled', () => (
      <CheckBox
         options={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Others', value: 'Others' }
         ]}
         selectedValue={'Female'}
         onSelectOption={action('selected')}
      />
   ))
   .add('selected buttons disabled', () => (
      <CheckBox
         disabled={true}
         options={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Others', value: 'Others' }
         ]}
         selectedValue={'Male'}
         onSelectOption={action('selected')}
      />
   ))
   .add('buttons disabled', () => (
      <CheckBox
         disabled={true}
         options={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Others', value: 'Others' }
         ]}
         onSelectOption={action('selected')}
      />
   ))
   .add('buttons ref', () => <CheckBoxRef />)
