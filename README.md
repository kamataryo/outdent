# outdent
[![npm version](https://badge.fury.io/js/%40kamataryo%2Foutdent.svg)](https://badge.fury.io/js/%40kamataryo%2Foutdent)
[![Build Status](https://travis-ci.org/kamataryo/outdent.svg?branch=master)](https://travis-ci.org/kamataryo/outdent)
[![Runkit](https://img.shields.io/badge/RunKit-Try!-brightgreen.svg)](https://runkit.com/kamataryo/outdent)

Outdent is a simple here document generator with pretty indents.

## install

```shell
$ yarn add @kamataryo/outdent
# or
$ npm insall @kamataryo/outdent
```

## usage

```javascript
// It's not pretty 🤔
function() {
  return function() {
    return `
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `
  }
}
```

```javascript
// It's pretty 😄
const outdent = require('@kamataryo/outdent')
function() {
  return function() {
    return outdent`
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `
  }
}
```

Prototype extension mode.

```javascript
const { $outdent } = require('@kamataryo/outdent')
typeof $outdent // Symbol

function() {
  return function() {
    return `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `[$outdent]
  }
}
```
