import { useState, useEffect } from 'react'

import { Container } from './style'

import { Loader } from '../../components/Loader/index'

import { api } from '../../services/api'

interface ICollaborator {
  id: number;
  name: string;
  email: string;
  photo: {
    url: string
  }
}

export const Dashboard = () => {
  const [data, setData] = useState<ICollaborator[]>([]) //aqui eu determinei que o tipo dos dados serão relativos aos determinados na interface de 'ICollaborator', e que serão estruturados dentro de uma 'array'
  const [isLoad, setIsLoad] = useState(false)
  const token = localStorage.getItem('@token')

  useEffect(() => {
    api.get('collaborator', {
      //não é necessário nesse caso do json-server, mas a aula ensina os parâmetrod o headers
      // headers: {
      //   Authorization: `Bearer R${token}`,
      // }
    }).then(response => {
      setIsLoad(true)
      setData(response.data)
    }).finally(() => setIsLoad(false))
  }, [token])

  if (isLoad) {
    return <Loader />
  }

  return (
    <Container>
      <div className="wrapper">
        <h1>Dashboard</h1>
        <div>
          {data?.map(el => (
            <div key={el.id} className="card">
              <img src={el.photo.url} alt="Imagem ou foto do colaborador" />
              {/* eu poderia ter passado "src={`http://localhost:3000/${el.photo.url}`}", mas isso funcionaria de uma forma onde existe eum local onde essa img está armazenada e é buscada pela API */}
              <div className="content-information">
                <p>Nome: {el.name}</p>
                <p>Email: {el.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}