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
            <Link to='/courses'> Cursos </Link>
            <Link to='/signup'> Cadastre-se </Link>
            <Link to='/signin'> Login </Link>
          </div>
        </NavBar>
      </header>
    </div>
  )
}