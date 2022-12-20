import { Container, ContainerItems, Label, Img } from './styles'
import Logo from '../../assets/img/logo-devclub.png'
import { MdHome, MdOutlineLiveTv} from 'react-icons/md'
import { FaPeopleCarry } from 'react-icons/fa'
import { HiShoppingBag  } from 'react-icons/hi'

import { useHome } from '../../hooks/HomeContext'

export function BottomMenu() {
  const { changeIframe, iFrame } = useHome()

  return (
    <Container>
      <ContainerItems onClick={() => changeIframe(0)} spotlight={iFrame === 0}>
        <MdHome color="#FFF" />
        <Label>Home</Label>
      </ContainerItems>

      <ContainerItems onClick={() => changeIframe(1)} spotlight={iFrame === 1}>
      <Img src={Logo} color="#FFF" />
        <Label>DevClub</Label>
      </ContainerItems>

      <ContainerItems onClick={() => changeIframe(2)} spotlight={iFrame === 2}>
      <FaPeopleCarry color="#FFF" />
        <Label>Comunidade</Label>
      </ContainerItems>

      <ContainerItems onClick={() => changeIframe(3)} spotlight={iFrame === 3}>
      <HiShoppingBag color="#FFF" />
        <Label>Loja</Label>
      </ContainerItems>

      <ContainerItems onClick={() => changeIframe(4)} spotlight={iFrame === 4}>
      <MdOutlineLiveTv color="#FFF" />
        <Label>Lives</Label>
      </ContainerItems>
    </Container>
  )
}
