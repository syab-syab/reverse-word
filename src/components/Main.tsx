import React, { useState } from 'react'

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
    <>
      <h1>入力した文字を反転させるやつ</h1>
      <input type="text" value={word} onChange={toggleWord} />
      <p onClick={() => setWord("")}>delete</p>
      <p>↓↓↓</p>
      <p onClick={() => copyReverseWord(wordReverse(word))}>Copy</p>
      <p>{wordReverse(word)}</p>
    </>
  )
}
