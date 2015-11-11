var path = require('path')
var readPackage = require('read-closest-package')
var fork = require('child_process').fork

module.exports = tooler
function tooler (cb) {
  readPackage(function (err, data, file) {
    if (err) return cb(err)
    if (!data || !data.tooler || typeof data.tooler !== 'string') {
      return cb('Must specify a "tooler" config in your package.json.')
    }

    var pkgPath = path.dirname(file)
    var script = path.resolve(pkgPath, data.tooler)
    fork(script, process.argv.slice(2), {
      cwd: process.cwd(),
      stdio: 'inherit'
    })
    cb(null)
  })
}
