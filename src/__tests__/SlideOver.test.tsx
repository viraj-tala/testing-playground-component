import { render, screen } from '@testing-library/react'
import { SlideOver } from '../pages/slideover/SlideOver' // Assuming your component is in a file named SlideOver.js

test('renders SlideOver component', () => {
  render(<SlideOver />)

  // Check if the component renders the text "SlideOver"
  const slideOverElement = screen.getByText(/SlideOver/i)
  expect(slideOverElement).toBeInTheDocument()

  // You can add more assertions or test other aspects of your component as needed
})
