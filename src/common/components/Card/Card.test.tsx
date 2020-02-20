import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Card from '.'

describe('Card component test cases', () => {
   it('should send callback while clicking Card Component', () => {
      const onClick = jest.fn()
      const { getByTestId } = render(<Card onClick={onClick} />)
      const card = getByTestId('card')
      fireEvent.click(card)
      expect(onClick).toBeCalled()
   })
})
