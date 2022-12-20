// import { BottomMenu } from '../../components/BottomMenu'
import { Iframe} from './styles'
import { useHome } from '../../hooks/HomeContext'
import HashLoader from 'react-spinners/HashLoader'
// import { ContentBanners } from '../ContentBanners'


export function Home() {
  const { iFrame, setLoading, loading, iFrameKey } = useHome()

  const override = {
    position: 'fixed',
    top: 'calc(50% - 25px)',
    left: 'calc(50% - 25px)',
  }

  return (
    <div>
      {/* {iFrame === 0 && <ContentBanners />} */}
      {iFrame === 0 && (
        <Iframe
          src="https://plataforma.devclub.com.br"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
        ></Iframe>
      )}
      {iFrame === 2 && (
        <Iframe
          src="https://comunidade.devclub.com.br"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
          style={{ paddingBottom: 86 }}
        ></Iframe>
      )}
      {iFrame === 3 && (
        <Iframe
          src="https://loja.devclub.com.br/"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
        ></Iframe>
      )}
      {iFrame === 4 && (
        <Iframe
          src="https://www.youtube.com/playlist?list=PLsFVybaG4mOAa9gF5q7dJfJigxAyN0SyJ"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
        ></Iframe>
      )}

      {/* {!loading && <BottomMenu />} */}

      <HashLoader color="#9500D4" loading={loading} cssOverride={override} />
    </div>
  )
}
