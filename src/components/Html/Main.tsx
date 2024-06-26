import { ReactNode } from 'react'
import styled from 'styled-components'

type MainType = {
  children: ReactNode
  class?: string
}

const Main: React.FC<MainType> = props => {
  return <MainTag className={props.class && props.class}>{props.children}</MainTag>
}

const MainTag = styled.main`
  display: flex;
  height: calc(100vh - 50px);
  width: 100%;
  flex-direction: column;
  padding: var(--space);
  overflow-y: auto;
  overflow-x: hidden;
  align-self: center;
`

export default Main
