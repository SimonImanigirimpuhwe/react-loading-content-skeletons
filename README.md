# react-loading-content-skeletons

> React content loading skeletons package

[![NPM](https://img.shields.io/npm/v/react-loading-content-skeletons.svg)](https://www.npmjs.com/package/react-loading-content-skeletons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.com/SimonImanigirimpuhwe/react-loading-content-skeletons.svg?branch=master)](https://travis-ci.com/SimonImanigirimpuhwe/react-loading-content-skeletons)

## Install

```bash
npm install --save react-loading-content-skeletons
```

```bash
yarn add react-loading-content-skeletons
```

## Usage

```tsx
import React, { Component } from 'react'

import { Text, Avatar, Thumbnail } from 'react-loading-content-skeletons'
import 'react-loading-content-skeletons/dist/index.css'

class Example extends Component {
  render() {
    return (
      <>
        <Avatar size='medium' />
        <Thumbnail theme='light' />
        <Text count={5} />
      </>
    )
  }
}
```

## Properties

| Type      | Size                         | count  | Theme           | Description                                          |
| --------- | ---------------------------- | ------ | --------------- | ---------------------------------------------------- |
| Avatar    | medium <br> large            | -      | dark <br> Light | small is the default size<br>light the default theme |
| Thumbnail | small <br> medium <br> large | -      | dark <br> light | small is default size<br>light the default theme     |
| Text      | small <br> medium <br> large | Number | dark <br> light | medium is default size<br>light the default theme    |

## Contributing

### **New feature**

Create pull request and follow [best practice](https://github.com/andela/bestpractices/wiki/Git-naming-conventions-and-best-practices)

### **Issue**

Rise new issue by following [best practice](https://guides.github.com/features/issues/)

## Contact

[SimonImanigirimpuhwe](https://github.com/SimonImanigirimpuhwe)

softimag08@gmail.com

## License

MIT © [SimonImanigirimpuhwe](https://github.com/SimonImanigirimpuhwe)
