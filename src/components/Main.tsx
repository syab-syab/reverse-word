import React, { useState } from 'react'
import styled from 'styled-components'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Wrapper = styled.main`
  padding: 5rem;
  background: #538392;
  height: 100vh;
  @media (max-width: 700px) {
    padding: 2rem 5rem;
  }
`

const InputWrapper = styled.div`
  display: flex;
  margin-top: 5rem;
  @media (max-width: 700px) {
    display: block;
  }
`

const Input = styled.input`
  flex-grow: 1;
  background: #E1F3DD;
  height: 5rem;
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
`

// モバイル表示で回転させる
// 矢印の位置がおかしくなる問題を解決する
const ArrowMark = styled.div`
  flex-grow: 1;
  font-weight: bold;
  height: auto;
  margin: 0 2rem;
  font-size: 3rem;
  @media (max-width: 700px) {
    display: block;
    transform: rotate(90deg);
  }
`

const BtnWrapper = styled.div`
  display: flex;
  margin-top: 7rem;
`

const BtnBlock = styled.div`
  flex-grow: 1;
  font-size: 2rem;
  cursor: pointer;
  border: 0.1rem solid black;
  background: #E1F3DD;
  padding: 1rem 0;
  font-weight: bold;
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
      <InputWrapper>
        <Input type="text" value={word} onChange={toggleWord} />
        <ArrowMark>
          <DoubleArrowIcon />
        </ArrowMark>
        <Input type="text" defaultValue={wordReverse(word)} readOnly />      
      </InputWrapper>

      <BtnWrapper>
        <BtnBlock onClick={() => setWord("")}>クリア</BtnBlock>
        <BtnBlock onClick={() => copyReverseWord(wordReverse(word))}>コピー</BtnBlock>
      </BtnWrapper>

    </Wrapper>
  )
}
