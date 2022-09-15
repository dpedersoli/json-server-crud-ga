//aqui eu identifico a condição do JWT do usuário baseado no seu locaStorage, dessa forma direcionando ele para a página determinada
import { Route, Navigate } from 'react-router-dom'

import jwt_decode from 'jwt-decode'

export const PrivateRoute: any = ({ component: Component, path: Path, ...rest }: any) => { // eu passei um 'any' determinando que essa função 'PrivateRoute' poderá retornar qualquer tipo de dado
  const isLoggedIn: string | null = localStorage.getItem('@gamaServiceToken') //toda vez que passo ':' depois de uma 'const'/'var' é quando eu seto a tipagem/type dele, que nesse caso é um dado do tipo 'string' ou do tipo 'null'

  const navigate = Navigate;

  const isSectionActive: any = () => {
    if (isLoggedIn === null) {
      return false;
    } else {
      const onlyToken = isLoggedIn
      const tokenPayLoad: any = jwt_decode(onlyToken)
      const expSeconds = tokenPayLoad.exp //aqui contém o tempo de expiração do jwt
      const timeNow = Date.now() / 1000;

      return timeNow > expSeconds ? false : true; //aqui determina a partir do tempo atual, que: se o jwt tiver mais de 1h que foi gerado, ele retorna 'false' (e direciona p/ tela 'Home'), se não ele retorna 'true' (direciona para a tela de 'dashboard') -> e esse valor será o valor da função 'isSectionActive' chamado abaixo nas rotas de renderização
    }
  }

  return (
    <>
      {/*
      <Route {...rest} render={props => (
        isSectionActive() ? <Component {...props} /> : navigate('/')
      )}/>
    */}
    </>
  )
}