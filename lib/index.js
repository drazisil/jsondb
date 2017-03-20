const fs = require('fs')

function create(filename, callback) {
  fs.open(filename, 'wx', (err, fd) => {
    callback(err, fd)
  })
}


module.exports = {
  create,
}
