import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui/Button/Button'

describe('button on screen', () => {
  test('button on screen', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
