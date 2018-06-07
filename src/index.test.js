const test = require('ava')
const outdent = require('./')

test('works', t =>
  t.is(
    outdent`
      These are sentences.
      I want them to be outdented.
    `,
    'These are sentences.\nI want them to be outdented.'
  )
)

test('works with template syntax', t => {
  const who = 'We'
  t.is(
    outdent`
      These are sentences.
      ${who} want them to be outdented.
    `,
    `These are sentences.\n${who} want them to be outdented.`
  )
})

test('work with prototype extension mode', t => {
  t.is(
    `
      These are sentences.
      I want them to be outdented.
    `[outdent],
    'These are sentences.\nI want them to be outdented.'
  )
})

test('module is gotten as Symbol', t =>
  t.is(typeof outdent.toString(), 'symbol')
)
