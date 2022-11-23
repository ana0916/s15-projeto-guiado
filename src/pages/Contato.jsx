import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

export function Contato() {
  return (
    <>
      <Header title="Contato" image={homeImg} />
      <Main title="Entre em contato comigo pelos links:" contactHref="https://g.dev/anasulli" contactTitle="Google Developers"/>
      <Footer text="Ana Footer" />
    </>
  )
}