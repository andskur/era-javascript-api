# era-javascript-api

**era-javascript-api** is a simple node.js wrapper for ERA REST API.

# Install

    npm install era-javascript-api

# Usage

### Era([options])

Example:

```js
var Era = require('era-javascript-api');
	
Era.block.last(function(data) {
  console.log(data)
});
```

# Methods

### lastHeight(callback)

## Block

### block.last(callback)

### block.first(callback)

### block.signature(signature, callback)

### block.height(height, callback)

### block.child(signature, callback)

## Blocks

### blocks.from(fromheight, limit, callback)

### blocks.signatures(fromheight, limit, callback)

## Records

### record.signature(signature, callback)

### record.height(height, sequence, callback)

## Addresses

### address.isValid(address, callback)

### address.publicKey(address, callback)

### address.lastReference(address, callback)

### address.unconfirmedLastRerence(address, callback)

### address.genBalance(address, callback)

### address.assets(address, callback)

### address.assetBalance(address, asset, callback)

## Tools

### verifySign(message, signature, publickey, callback)

# License

[MIT](LICENSE)