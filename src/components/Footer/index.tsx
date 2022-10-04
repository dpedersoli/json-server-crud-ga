import { FooterTag } from './style'

import { IGlobalState } from '../../store/modules/user/types'
import { useSelector } from 'react-redux'

export const Footer = () => {
  const state = useSelector((state: IGlobalState) => state.users)

  return (
    <FooterTag>
      <p>Gama Academy</p>
      <p>Temos {state.length} usuários cadastrados.</p>
    </FooterTag>
  )
}