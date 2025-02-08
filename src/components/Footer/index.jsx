import { Container } from './styles'
import Logo from '../../assets/logodark.svg'


export function Footer() {
  return (
    <Container>
    <section>
        <img className="Logo" src={Logo} alt="Logo food explorer" title="Logo food explorer" />
        <h1>food explorer</h1>
      </section>
        
      <aside>
        <span>© 2025 - Todos os direitos reservados.</span>
      </aside>
    </Container>
  )
}