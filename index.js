var winSpawn = require('win-spawn')
var path = require('path')
var readPackage = require('read-closest-package')

module.exports = tooler
function tooler (cb) {
  readPackage(function (err, data, file) {
    if (err) return cb(err)
    if (!data || !data.tooler || typeof data.tooler !== 'string') {
      return cb('Must specify a "tooler" config in your package.json.')
    }

    var pkgPath = path.dirname(file)
    var script = path.resolve(pkgPath, data.tooler)
    winSpawn(script, process.argv.slice(2), { stdio: 'inherit' })
    cb(null)
  })
}
