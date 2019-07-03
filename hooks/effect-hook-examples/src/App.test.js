import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import '@testing-library/react/cleanup-after-each'

import App from './App'

it('should render initial counters', () => {
  const { getByText } = render(<App />)
  const primaryCounterEl = getByText(/primary counter/i)
  const secondaryCounterEl = getByText(/secondary counter/i)

  expect(primaryCounterEl.innerHTML).toContain('0')
  expect(secondaryCounterEl.innerHTML).toContain('0')
})

it('should render initial input', () => {
  const { getByPlaceholderText } = render(<App />)
  const input = getByPlaceholderText(/type random things here/i)

  expect(input).toBeTruthy()
})

it('should update counters on click', () => {
  const { getAllByText, getByText } = render(<App />)
  const [primaryButton, secondaryButton] = getAllByText(/increment/i)
  const primaryCounterEl = getByText(/primary counter/i)
  const secondaryCounterEl = getByText(/secondary counter/i)

  fireEvent.click(primaryButton)
  fireEvent.click(secondaryButton)

  expect(primaryCounterEl.innerHTML).toContain('1')
  expect(secondaryCounterEl.innerHTML).toContain('1')
})

it('should update controlled input on change', () => {
  const { getByPlaceholderText, getByText } = render(<App />)
  const input = getByPlaceholderText(/type random things here/i)
  const controlledInputEl = getByText(/controlled input/i)

  fireEvent.change(input, {
    target: { value: 'potato' },
  })

  expect(controlledInputEl.innerHTML).toContain('potato')

  fireEvent.change(input, {
    target: { value: '' },
  })

  expect(controlledInputEl.innerHTML).not.toContain('potato')
})
