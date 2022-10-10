import { Bottom } from './styles'
import Logo from '../../assets/img/logo-devclub.png'
import { Image } from './styles'
import { MdPeopleAlt } from "react-icons/md";


export function BottomMenu() {
  return (
    <Bottom>
      <Image src={Logo} alt="devclub-logo" />
      <MdPeopleAlt />
    </Bottom>
  )
}
