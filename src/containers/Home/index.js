import { BottomMenu } from '../../components/BottomMenu'
import { Iframe } from './styles'
import { useHome } from '../../hooks/HomeContext'
import HashLoader from 'react-spinners/HashLoader'
import { Profile } from '../Profile'
import { DeleteAccount } from '../DeleteAccount'

export function Home() {
  const { iFrame, setLoading, loading, iFrameKey } = useHome()

  const override = {
    position: 'fixed',
    top: 'calc(50% - 25px)',
    left: 'calc(50% - 25px)',
  }

  return (
    <div>
      {iFrame === 1 && (
        <Iframe
          src="https://comunidade.devclub.com.br"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
        ></Iframe>
      )}
      {iFrame === 0 && (
        <Iframe
          src="https://plataforma.devclub.com.br"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
        ></Iframe>
      )}
      {!loading && <BottomMenu />}

      <HashLoader color="#9500D4" loading={loading} cssOverride={override} />
    </div>
  )
}
