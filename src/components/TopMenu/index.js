import { Container, ContainerItems } from './styles';
import { useHome } from '../../hooks/HomeContext';

export function TopMenu({ goBack }) {
  const { changeIframe, iFrame } = useHome();

  return (
    <Container>
      <ContainerItems onClick={() => goBack()} className="back">
        <button name="caret-back" size={32} color="#FFF">Voltar</button>
      </ContainerItems>

      <ContainerItems className="refresh">
        <button color="#FFF" onClick={() => changeIframe(iFrame)}>voltar</button>
      </ContainerItems>
    </Container>
  );
}
