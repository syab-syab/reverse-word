import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  background: black;
`

const Title = styled.a`
  color: white;
  text-decoration: none;
`

const Header = () => {
  return (
    <Wrapper>
      <Title href='https://homemade-apps.vercel.app/' target='blank'>リバースワード</Title>
    </Wrapper>
  )
}

export default Header