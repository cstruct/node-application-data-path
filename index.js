var os = require('os')
var path = require('path')

function darwin (name) {
  return path.join(process.env['HOME'], 'Library', name)
}

function linux (name) {
  if (process.env['XDG_DATA_HOME']) {
    return path.join(process.env['XDG_DATA_HOME'], name)
  }

  return path.join(process.env['HOME'], '.local', 'share', name)
}

function win32 (name) {
  if (process.env['LOCALAPPDATA']) {
    return path.join(process.env['LOCALAPPDATA'], 'data', name)
  }

  return path.join(process.env['USERPROFILE'], 'Application Data', name)
}

module.exports = function applicationDataPath (name) {
  if (typeof name !== 'string') {
    throw new TypeError('First parameter must be a string')
  }

  switch (os.platform()) {
    case 'darwin': return darwin(name)
    case 'linux': return linux(name)
    case 'win32': return win32(name)
    default: throw new Error('Platform not supported')
  }
}
