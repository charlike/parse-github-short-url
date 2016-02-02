/*!
 * parse-github-short-url <https://github.com/tunnckoCore/parse-github-short-url>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use valict'

var regex = /([-_\w]*)\/*([-_.\w]*)(?:#|@)?([-_.\w]*)?/
var cache = {}

module.exports = function parseGithubShortUrl (str, opts) {
  return cache[str] || (cache[str] = parse(str, opts))
}

function parse (val, opts) {
  if (typeof val !== 'string' || !val.length) {
    return null
  }
  var match = regex.exec(val)

  var res = {}
  res.owner = match[1] && match[1].length && match[1] || null
  res.name = match[2] && match[2].length && match[2] || null
  res.repo = res.owner && res.name ? res.owner + '/' + res.name : null
  res.branch = match[3] && match[3].length && match[3] || 'master'

  return res
}
