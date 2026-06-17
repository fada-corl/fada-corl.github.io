import { SITE } from '../../data/content'
import { Container } from '../layout/Container'
import './footer.css'

export function Footer() {
  return (
    <footer className="footer dark">
      <Container width="wide">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__acronym">FADA</span>
            <p className="footer__line">{SITE.title}</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
