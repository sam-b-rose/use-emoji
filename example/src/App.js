import React, { useState } from 'react'
import { useEmoji, useSameEmoji, emojiList } from 'use-emoji'

const App = () => {
  const [prevEmoji, setPrevEmoji] = useState('')
  const emoji = useEmoji()
  const sameEmoji = useSameEmoji()

  return (
    <div className='container'>
      <h1>Demo</h1>
      <p>
        Same Emoji: {sameEmoji} <br />
        New emoji: {emoji} <br />
        Previous emoji: {prevEmoji} <br />
      </p>
      <button className='button' onClick={() => {
        setPrevEmoji(emoji)
      }}>
        Update
      </button>
      <h1>Emoji list</h1>
      <div className='grid'>
        {emojiList.map(e => (
          <div key={e}>{e}</div>
        ))}
      </div>
    </div>
  )
}
export default App
