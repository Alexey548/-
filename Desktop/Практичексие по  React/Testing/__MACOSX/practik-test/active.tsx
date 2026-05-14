import { render, screen } from '@testing-library/react' 
import { NavMenu } from ' /NavMenu'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}))

jest.spyOn(Router, 'useLocation').mockReturnValue({
  pathname: '/settings',
  hash: '',
  key: '',
  search: '',
  state: '',
})

describe('Test Nav Menu', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Check active settings link', () = {
    /*
      Какой-либо функционал, который позволит получить '/settings' в pathname 
      из хука useLocation.
    */

    render (<NavMenu />)

    const settingsLink = screen.getByText('Settings')

    expect(settingsLink.classList.contains('active')).toBeTruthy()
})