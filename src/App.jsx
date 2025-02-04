import React, { useEffect, useState } from 'react'

export const App = () => {
  const [clientMessage, setClientMessage] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    setClientMessage('Hello World form Server!!')
  }, [])

  return (
    <>
      <h1>{clientMessage}</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>クリック</button>
    </>
  )
}

export default App
