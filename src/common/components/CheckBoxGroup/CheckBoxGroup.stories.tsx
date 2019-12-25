import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CheckboxGroup from '.'

const options = [
   { label: 'Male', value: 'MALE' },
   { label: 'Female', value: 'FEMALE' },
   { label: 'Others', value: 'OTHERS' }
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
               selectedValues={['FEMALE']}
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
         selectedValues={['FEMALE']}
         onChange={action('selected')}
      />
   ))
   .add('selected buttons disabled', () => (
      <CheckboxGroup
         disabled={true}
         options={options}
         selectedValues={['MALE']}
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
