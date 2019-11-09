import { useMemo } from 'react'
import list from './emoji-list'

const count = Object.keys(list).length
export const emojiList = Object.values(list)

export const useEmoji = () => {
  return emojiList[Math.floor(Math.random() * count)]
}

export const useSameEmoji = (deps) => useMemo(useEmoji, [deps])
