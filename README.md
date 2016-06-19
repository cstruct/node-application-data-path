# node-application-data-path

Store your application data in the right location.

## Installation

```bash
npm install --save application-data-path
```

## Usage

```javascript
var applicationDataPath = require('application-data-path')

// dataPath is a string with the path to a directory
// where you can store your data.
var dataPath = applicationDataPath('My App')
```

## API

### `applicationDataPath(name)`

Return a string with the path to a directory where you can store your
application specific data.

## Acknowledgments

Heavily inspired by [node-application-config-path](https://github.com/LinusU/node-application-config-path)

## License

MIT