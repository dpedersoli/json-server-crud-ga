import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './style'

export const Home = () => {
  const [isLoad, setIsLoad] = useState(false)

  return (
    <Container>
      {isLoad ? (
        <div>
          <p>Carregando...</p>
        </div>
      ) : (
        <div>
          <h1>Home</h1>
          <Link to="/contact">Access contact page</Link>
        </div>
      )}

      <div className="button-container">
        <button onClick={() => setIsLoad(!isLoad)}>
          Click here!
        </button>
      </div>
      {/*a arrowfnc dentro do 'onClick' é necessária para aguardar o evento do 'click' e não ser ativada toda vez que a página renderizar*/}
    </Container >
  )
}