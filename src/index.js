const stripIndent = require('strip-indent')

const CR = '\r'
const LF = '\n'
const CRLF = CR + LF

/**
 * do outdent
 * @param  {string} taggedTemplates analyzing tagged templates
 * @return {string}                 result
 */
const outdent = (...taggedTemplates) => {
  const [templates, ...variables] = taggedTemplates
  const lastIndex = templates.length - 1

  // union tagged template literal arguments
  let value = templates.map((template, index) =>
     template + (index === lastIndex ? '' : variables[index] || '')
  ).join('')


  if (value.substr(0, 2) === CRLF) {
    value = value.substr(2, value.length - 2)
  } else if (value[0] === CR || value[0] === LF) {
    value = value.substr(1, value.length - 1)
  }

  if (value.substr(value.length - 2, 2) === CRLF) {
    value = value.substr(0, value.length - 2)
  } else if (value[value.length] === CR || value[value.length] === LF) {
    value = value.substr(0, value.length - 1)
  }

  return stripIndent(value).replace(/\s*$/, '')
}

// prototype extension mode
const $outdent = Symbol('outdent')

Object.defineProperty(String.prototype, $outdent, {
  get: function() {
    return outdent([this])
  }
})

outdent.$outdent = $outdent
outdent.default = outdent

module.exports = outdent
