import { fireEvent, render, screen } from '@testing-library/react' 
import { Button } from './test'
describe( 'Test Button', () = {
  afterEach(() => {
    jest.clearAllMocks()
  })
  
  it( 'Check onClick prop', () → f
    const onClick = jest.fn()
    render (<Button onClick={onClick) />)
    
    fireEvent.click(screen.getByRole( 'button'))
    
    expect(onClick).toHaveBeenCalled()
  })
})