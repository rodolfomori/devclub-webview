import { Bottom } from './styles'
import Logo from '../../assets/img/logo-devclub.png'
import { Image, ContainerItems, Label } from './styles'
import { MdPeopleAlt } from 'react-icons/md'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { useHome } from '../../hooks/HomeContext'

export function BottomMenu() {
  const { setIframe, setLoading } = useHome()

  function changeIframe(iframe){
    setIframe(iframe)
  }

  return (
    <Bottom>
      <ContainerItems onClick={() => {
        changeIframe(1)
        setLoading(true)
      }}>
        <Image src={Logo} alt="devclub-logo" />
        <Label>DevClub</Label>
      </ContainerItems>

      <ContainerItems onClick={() => {
        changeIframe(0)
        setLoading(true)
      }}>
        <MdPeopleAlt />
        <Label>Comunidade</Label>
      </ContainerItems>

      {/* <ContainerItems>
        <MdOutlineWorkOutline />
        <Label>Vagas</Label>
      </ContainerItems> */}
    </Bottom>
  )
}
