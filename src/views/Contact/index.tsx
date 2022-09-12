import { Link } from 'react-router-dom'
import { useState, useCallback, FormEvent } from 'react'

import { api } from '../../services/api'

import { Container } from './style'

interface IData {
  name: string;
  email: string;
  password: string;
}

export const Contact = () => {
  const [data, setData] = useState({} as IData) //quando eu passo o "'{}' as IData" eu especifico que o objeto terá os dados do tipo 'IData'; quando passo "useState<IData>()" eu especifico que o valor do estado será do tipo 'IData' mas não que o valor do estado como object ou array será do tipo 'IData', para isso tenho que passar no método anterior
  const [submit, setSubmit] = useState(false);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => { //no TS tenho que especificar o tipo de evento que será solicitado nessa função, que no caso será do tipo 'Form', que recebe o 'HTMLFormElement'
    e.preventDefault();

    api.post('users', data)
      .then((res) => {
        if (res.status === 200) {
          setSubmit(true)
        }
      })
  }, [data])

  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contact</h1>
        Name: {data?.name}
        <br />
        Email: {data?.email}
        <div className="card">
          {submit ? (
            <div>
              <h2>Obrigado, {data.name}, pelo envio dos dados</h2>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="nome"
                onChange={e => setData({ ...data, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="email"
                onChange={e => setData({ ...data, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="password"
                onChange={e => setData({ ...data, password: e.target.value })}
              />
              <button
                type="submit"
              >
                Cadastrar
              </button>
            </form>
          )}
        </div>
        <Link to="/">Access home page</Link>
      </div>
    </Container>
  )
}