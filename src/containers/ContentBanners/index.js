import { Container, Banner, ContainerItems } from './styles'
import DevClub from '../../assets/img/banners/devclub.webp'
import Ebook from '../../assets/img/banners/ebook.webp'
import Mentoria from '../../assets/img/banners/mentoria.webp'
import Playlist from '../../assets/img/banners/playlist.webp'
import Suporte from '../../assets/img/banners/suporte.webp'
import Telegram from '../../assets/img/banners/telegram.webp'
import Terca from '../../assets/img/banners/terca.webp'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

export function ContentBanners() {
  return (
    <Container>
      <a href="https://rodolfomori.com.br/devclub">
        <Banner src={DevClub} />
      </a>
      <a href="https://rodolfomori.com.br/ebook">
        <Banner src={Ebook} />
      </a>
      <a href="https://go.rodolfomori.com.br/suportev">
        <Banner src={Mentoria} />
      </a>
      <a href="https://www.youtube.com/watch?v=PiSgMhtPH_Y&list=PLsFVybaG4mOBJgUJBsMe0uxu4Sf7rhiAg&ab_channel=RodolfoMori">
        <Banner src={Playlist} />
      </a>
      <a href="https://go.rodolfomori.com.br/suporte">
        <Banner src={Suporte} />
      </a>
      <a href="https://go.rodolfomori.com.br/telegram">
        <Banner src={Telegram} />
      </a>
      <a href="https://rodolfomori.com.br/aulas-ao-vivo/">
        <Banner src={Terca} />
      </a>

      <a href='https://www.instagram.com/rodolfomorii/'>
        <ContainerItems>
          <FaInstagram className="insta" /> <p>@rodolfomorii </p>
        </ContainerItems>
      </a>

      <a href='https://www.tiktok.com/@rodolfomori'>
        <ContainerItems>
          <FaTiktok className="tiktok" /> <p>@rodolfomori</p>
        </ContainerItems>
      </a>

      <a href='https://youtube.com/c/rodolfomori'>
        <ContainerItems>
          <FaYoutube className="youtube" /> <p>@rodolfomori</p>
        </ContainerItems>
      </a>
    </Container>
  )
}
