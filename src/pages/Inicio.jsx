import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'
import { Footer } from '../components/Footer'

export function Inicio() {
  return (
    <>
      <Header title="Meu site lindo" image={homeImg} />
      <Footer text="Ana Footer" />
    </>
  )
}