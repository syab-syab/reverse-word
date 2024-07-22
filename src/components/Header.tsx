import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  background: black;
  font-size: 1.5rem;
  padding: 0.4rem 0;
  @media (max-width: 700px) {
    font-weight: bold;
  }
`

const Title = styled.a`
  color: white;
  text-decoration: none;
`

const Header = () => {
  return (
    <Wrapper>
      <Title href='https://homemade-apps.vercel.app/' target='blank'>ワードリバース</Title>
    </Wrapper>
  )
}

export default Header