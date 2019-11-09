import { renderHook } from '@testing-library/react-hooks'
import { useEmoji, useSameEmoji } from './'

describe('useEmoji', () => {
  it('returns a string with content', () => {
    const { result } = renderHook(() => useEmoji())

    expect(result.current).toBeTruthy()
    expect(typeof result.current).toBe('string')
    expect(result.current).not.toBe('')
  })

  it('returns a string with new content', () => {
    const { result, rerender } = renderHook(() => useEmoji())
    const previousEmoji = result.current

    rerender()

    expect(result.current).not.toBe(previousEmoji)
  })
})

describe('useSameEmoji', () => {
  it('returns a string with content', () => {
    const { result } = renderHook(() => useSameEmoji())

    expect(result.current).toBeTruthy()
    expect(typeof result.current).toBe('string')
    expect(result.current).not.toBe('')
  })

  it('returns a string with the same content', () => {
    const { result, rerender } = renderHook(() => useSameEmoji())
    const sameEmoji = result.current

    rerender()

    expect(result.current).toBe(sameEmoji)
  })
})
