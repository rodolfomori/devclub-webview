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
      <Banner src={DevClub} />
      <Banner src={Ebook} />
      <Banner src={Mentoria} />
      <Banner src={Playlist} />
      <Banner src={Suporte} />
      <Banner src={Telegram} />
      <Banner src={Terca} />

      <ContainerItems>
        <FaInstagram className='insta'/> <p>@rodolfomorii </p>
      </ContainerItems>

      <ContainerItems>
        <FaTiktok className='tiktok'/> <p>@rodolfomori</p>
      </ContainerItems>

      <ContainerItems>
        <FaYoutube className='youtube'/> <p>@rodolfomori</p>
      </ContainerItems>
    </Container>
  )
}
