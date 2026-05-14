import { Link, useLocation } from "react-router-dom'
import './styles.css'



export const NavMenu = () => {
  const { pathname } = useLocation()

  return (
    ‹div className="container">
      <Link to="/" className={pathname == '/' ? 'active' : ''}>
        Main 
      </Link>
      <Link 
        to="/settings" className=(pathname === '/settings' ? 'active' : ''}
      >
        Settings
      </Link>
      <Link
        to="/dashboard"
        className={pathname === '/dashboard' ? 'active' : ''}
      >
        Dashboard
      </Link>
    </div>
)}

