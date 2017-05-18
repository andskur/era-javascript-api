# era-javascript-api

**era-javascript-api** is a simple node.js wrapper for ERA REST API.

# Install

    npm install era-javascript-api

# Usage

### Era([options])

Example:

```js
var Era = require('era-javascript-api');
era = new Era()
	
era.lastBlock(function(data, err) {
  if (!err) console.log(data)
})
```

# Methods

	### lastHeight(callback)

	## Blocks

		### lastBlock(callback)

		### block(signature, callback)

		### blockByHeight(height, callback)

		### childBlock(signature, callback)

		### blocks(fromheight, limit, callback)

		### blocksSignatures(fromheight, limit, callback)

	## Records

		### record(signature, callback)

		### recordByHeight(height, sequence, callback)

	## Addresses

		### addressIsValid(address, callback)

		### addressPublicKey(address, callback)

		### addressLastReference(address, callback)

		### addressUnconfirmedLastreRerence(address, callback)

		### addressGenBalance(address, callback)

		### addressAssets(address, callback)

		### addressAssetBalance(address, asset, callback)

	## Tools

		### verifySign(message, signature, publickey, callback)

# License

[MIT](LICENSE)