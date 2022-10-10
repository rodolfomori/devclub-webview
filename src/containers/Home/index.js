import { BottomMenu } from '../../components/BottomMenu'
import { Iframe } from './styles'
import { useHome } from '../../hooks/HomeContext'
import { useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'

export function Home() {
  const { iFrame, setLoading, loading } = useHome()

  const override = {
    position: 'fixed',
    top: 'calc(50% - 25px)',
    left: 'calc(50% - 25px)',
  }

  return (
    <div>
      {iFrame === 0 && (
        <Iframe
          src="https://comunidade.rodolfomori.com.br"
          onLoad={() => setLoading(false)}
        ></Iframe>
      )}
      {iFrame === 1 && (
        <Iframe
          src="https://plataforma.devclub.com.br"
          onLoad={() => setLoading(false)}
        ></Iframe>
      )}
      {!loading && <BottomMenu />}

      <HashLoader color="#9500D4" loading={loading} cssOverride={override} />
    </div>
  )
}
