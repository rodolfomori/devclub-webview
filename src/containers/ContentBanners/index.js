import { Container, Banner, ContainerItems, LinkDelete } from './styles'
import DevClub from '../../assets/img/banners/devclub.webp'
import Ebook from '../../assets/img/banners/ebook.webp'
import Mentoria from '../../assets/img/banners/mentoria.webp'
import Playlist from '../../assets/img/banners/playlist.webp'
import Suporte from '../../assets/img/banners/suporte.webp'
import Telegram from '../../assets/img/banners/telegram.webp'
import Terca from '../../assets/img/banners/terca.webp'
import YT from '../../assets/img/youtube/thumb.png'
import YT2 from '../../assets/img/youtube/thumb-jr.jpeg'

import { FaInstagram, FaTiktok, FaYoutube} from 'react-icons/fa'

export function ContentBanners() {
  return (
    <Container>
      <a href="https://youtu.be/rrW8Z18XoQ4" style={{marginBottom: 20}}>
        <Banner src={YT2} />
      </a>

      <a href="https://youtu.be/BK3U6pnkMcU" style={{marginBottom: 40}}>
        <Banner src={YT} />
      </a>

      {/* <a className='link-pdf' href='https://rodolfo-mori-material.s3.amazonaws.com/%23Live+45+-+Curso+de+HTML.pdf'>PDF do Curso de HTML</a> */}

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

      <a href="https://www.instagram.com/rodolfomorii/">
        <ContainerItems>
          <FaInstagram style={{ color: '#e400d7' }} /> <p>@rodolfomorii </p>
        </ContainerItems>
      </a>

      <a href="https://www.tiktok.com/@rodolfomori">
        <ContainerItems>
          <FaTiktok style={{ color: '#c7c7c7' }} /> <p>@rodolfomori</p>
        </ContainerItems>
      </a>

      <a href="https://youtube.com/c/rodolfomori">
        <ContainerItems>
          <FaYoutube style={{ color: '#ff0000' }} /> <p>@rodolfomori</p>
        </ContainerItems>
      </a>

      <LinkDelete to='/delete'>Deletar minha conta</LinkDelete>

    </Container>
  )
}
