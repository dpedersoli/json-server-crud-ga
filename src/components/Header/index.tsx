import { Link } from 'react-router-dom'

import { NavBar } from './style'

import Logo from '../../assets/img/logo.png'

export const Header = () => {
  return (
    <div>
      <header>
        <NavBar>
          <img src={Logo} alt="Logo" />
          <div className="nav-links">
            <Link to='/'> Home </Link>
            <Link to='/'> Cursos </Link>
            <Link to='/'> Caadastre-se </Link>
            <Link to='/'> Login </Link>
          </div>
        </NavBar>
      </header>
    </div>
  )
}