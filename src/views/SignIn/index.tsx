import { useState, useCallback, FormEvent } from 'react'
import { useNavigate, Link } from "react-router-dom";

import { api } from '../../services/api'

import { Container } from './style'

import { toast } from 'react-toastify'
import { Loader } from '../../components/Loader'

interface IData {
  email: string;
  password: string;
}

export const SignIn = () => {
  const [data, setData] = useState<IData>({} as IData)
  const [load, setLoad] = useState(false)

  let navigate = useNavigate();

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true)

    api.post('register', data)
      .then((response) => {
        if (response.status === 201) { //aqui na verdade, quando estiver funcionando, o 'response.status' tem que ser '=== 200' -> não funciona pq não sei gerar JWT mockado
          const token = response.data
          localStorage.setItem('@gamaServiceToken', token)
          setLoad(false)
          navigate('/dashboard')
        }
      })
      .catch(() => {
        toast.error('Ops, algo deu errado')
        setLoad(false)
      })

  }, [data, navigate]);

  if (load) {
    return <Loader />
  }

  return (
    <Container>
      <div className="card">
        <h5>Logar no Sistema</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Informe seu E-mail"
            onChange={e => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Informe sua Senha"
            onChange={e => setData({ ...data, password: e.target.value })}
          />
          <button type="submit">Logar</button>
        </form>
        <Link to="/signup">Ainda não é cadastrado? <span>Criar Conta</span></Link>
      </div>
    </Container>
  )
}