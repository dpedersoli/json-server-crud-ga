import { Container } from './style'
import PacmanLoader from "react-spinners/PacmanLoader";

export const Loader = () => {
  return (
    <Container>
      <div>
        <h1>Aguarde...</h1>
        <PacmanLoader color="#8c52e5" size={50} />
      </div>
    </Container>
  )
}