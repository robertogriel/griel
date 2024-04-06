import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Main from '../components/Html/Main'
import Loading from '../components/Loading'
import styled from 'styled-components'
import { Button } from '@mui/material'

const RedirectPage = () => {
  const Router = useRouter()
  const [urlRedirect, setUrlRedirect] = useState<string>()

  useEffect(() => {
    redirectTo()
  }, [])

  async function redirectTo() {
    const url = window.location.search.split('?to=')[1] || 'loja-virtual'
    setUrlRedirect(url)
    await Router.replace(url)
  }

  return (
    <Main>
      <LoadingContainer>
        <Loading height="100" width="100" />
      </LoadingContainer>
      {urlRedirect && (
        <LinkContainer>
          <h1>Redirecionando para /{urlRedirect}</h1>
          <Button variant="contained" onClick={redirectTo}>
            Se isso não acontecer, clique aqui
          </Button>
        </LinkContainer>
      )}
    </Main>
  )
}

const LoadingContainer = styled.div``
const LinkContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    display: flex;
    color: var(--white);
    text-align: center;
  }
  button {
    margin-top: 2rem;
  }
`

export default RedirectPage
