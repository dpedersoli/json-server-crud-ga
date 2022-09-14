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
  const [load, setLoad] = useState(true)

  let navigate = useNavigate();

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true)

    api.post('register', data)
      .then((response) => {
        if (response.status === 201) {
          setLoad(false)
          toast.success('Cadastro realizado com sucesso!', {
            hideProgressBar: false,
            onClose: () => navigate('/signin')
          })
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