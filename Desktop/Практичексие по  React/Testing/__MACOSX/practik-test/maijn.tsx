import { render, screen } from '@testing-library/react'
import { NavMenu } from './NavMenu'
import Router, { MemoryRouter } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}))

describe('Test Nav Menu', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Check active settings link', () => {
    jest.spyOn(Router, 'useLocation').mockReturnValue({
      pathname: '/settings',
      hash: '',
      key: '',
      search: '',
      state: '',
    })

    render(<NavMenu />, { wrapper: MemoryRouter })

    const settingsLink = screen.getByText('Settings')

    expect(settingsLink.classList.contains('active')).toBeTruthy()
  })
})