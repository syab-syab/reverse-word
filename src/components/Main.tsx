import React, { useState } from 'react'
import styled from 'styled-components'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Wrapper = styled.main`
  padding: 1rem;
  background: #538392;
`

const Input = styled.input`
  background: #E1F3DD;
  font-size: 4rem;
  text-align: center;
  display: inline-block;
`

// モバイル表示で回転させる
// 矢印の位置がおかしくなる問題を解決する
const ArrowMark = styled.span`
  display: inline-block;
  font-size: 5rem;
  font-weight: bold;
  margin: 0 2rem;
  @media (max-width: 700px) {
    display: block;
    transform: rotate(90deg);
  }
`

export const Main = () => {
  const [word, setWord] = useState<string>("")

  const toggleWord = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setWord(e.target.value)
  }

  const wordReverse = (val: string): string => {
    const arr: string[] = Array.from(val)
    let tmp: string[] = []
    arr.forEach(a => {
      tmp.unshift(a)
    })
    const reverseWord: string = tmp.join("")
    return reverseWord
  }

  const copyReverseWord = (val: string) => {
    navigator.clipboard.writeText(val)
  }
  return (
    <Wrapper>
      <Input type="text" value={word} onChange={toggleWord} />
      <ArrowMark>
        <DoubleArrowIcon />
      </ArrowMark>
      <Input type="text" defaultValue={wordReverse(word)} readOnly />
      <p onClick={() => setWord("")}>delete</p>
      <p onClick={() => copyReverseWord(wordReverse(word))}>Copy</p>

    </Wrapper>
  )
}
