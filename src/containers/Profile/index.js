import { Container } from './styles'
import { useHome } from '../../hooks/HomeContext'

export function Profile() {
  const { changeIframe } = useHome()

  return (
    <Container>
        <h2>Esse é o seu Perfil na Plataforma DevClub</h2>

        <p>Seus dados não são utilizados fora dessa plataforma e estão seguros conosco 💚</p>

        <a onClick={() => changeIframe(0)}> Conteúdos do DevClub</a>

        <p>Mas caso queira deletar completamente a sua conta, clique no botão abaixo que daremos início ao processo de deleção!</p>

        <a onClick={() => changeIframe(2)}>Deletar minha conta</a>

        <span>Lembrando que ao deletar sua conta, seus dados serão excluídos parmanentemente!</span>
    </Container>
  )
}
