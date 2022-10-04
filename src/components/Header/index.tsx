import { Link } from 'react-router-dom'

import { NavBar } from './style'

import { useSelector } from 'react-redux'
import { IGlobalState } from '../../store/modules/user/types'

import Logo from '../../assets/img/logo.png'

export const Header = () => {
  const state = useSelector((state: IGlobalState) => state.users)

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
            {/* OU SEJE, se esse dado 'state' de fato existir (em outras palavras, "se o usuário estiver logado") então ele mostrará na tela esse <Link to="dashboard"> pro Dashboard*/}
            {state.length >= 1 && (
              <Link to="dashboard">
                Acessar meu Dashboard
              </Link>
            )}
          </div>
        </NavBar>
      </header>
    </div>
  )
}