# use-emoji

> React hook for emoji related things

[![NPM](https://img.shields.io/npm/v/use-emoji.svg)](https://www.npmjs.com/package/use-emoji) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-emoji
```

## Usage

```jsx
import React, { Component } from 'react'

import { useEmoji, useSameEmoji } from 'use-emoji'

const Example = () => {
  const newEmoji = useEmoji()   // returns a new random emoji on each rerender
  const sameEmoji = useSameEmoji()  // returns a the same random emoji on each rerender
  return (
    <div>{newEmoji}</div>
    <div>{sameEmoji}</div>
  )
}
```

## License

MIT © [samrose3](https://github.com/samrose3)
