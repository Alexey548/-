import { BrowserRouter } from 'react-router-dom'
import './app.css'

import { NavMenu } from './NavMenu'

export function App() {
  return (
    <BrowserRouter>
      <NavMenu />
    </BrowserRouter>
  )
}

render(<NavMenu />, { wrapper: MemoryRouter })