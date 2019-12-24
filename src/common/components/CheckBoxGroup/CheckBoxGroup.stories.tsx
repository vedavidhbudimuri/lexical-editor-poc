import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CheckboxGroup from '.'

const options = [
   { label: 'Male', value: 'Male' },
   { label: 'Female', value: 'Female' },
   { label: 'Others', value: 'Others' }
]

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
            <CheckboxGroup
               options={options}
               selectedValue={'Female'}
               onChange={action('selected')}
               ref={this.ref}
            />
         </div>
      )
   }
}
storiesOf('CheckboxGroup', module)
   .add('checkbox buttons', () => (
      <CheckboxGroup options={options} onChange={action('selected')} />
   ))
   .add('buttons enabled', () => (
      <CheckboxGroup
         options={options}
         selectedValue={'Female'}
         onChange={action('selected')}
      />
   ))
   .add('selected buttons disabled', () => (
      <CheckboxGroup
         disabled={true}
         options={options}
         selectedValue={'Male'}
         onChange={action('selected')}
      />
   ))
   .add('buttons disabled', () => (
      <CheckboxGroup
         disabled={true}
         options={options}
         onChange={action('selected')}
      />
   ))
   .add('buttons ref', () => <CheckBoxRef />)
