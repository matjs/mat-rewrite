var _ = require('lodash')

function rewrite(rules) {
  return function *rewrite(next) {
    var url = this.url
    var len = rules.length

    for (var i = 0; i < len; i++) {
      var rule = rules[i]
      if (_.isFunction(rule)) {
        url = rule(url) || url
      } else {
        url = url.replace(rule[0], rule[1])
      }
    }

    this.url = url

    yield next
  }
}

module.exports = rewrite