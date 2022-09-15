import { Container } from './style'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Home = () => {

  return (
    <>
      <Header />
      <Container>
        <div>
          <h1>Home</h1>
        </div>
      </Container >
      <Footer />
    </>
  )
}