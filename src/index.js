import {_get, _post} from './requests'

export default {

  /**
   * Get last founded block height
   * @param  {Function} callback
   * @return {Number}            Block height
  */
  lastHeight(callback) {
    let parameters = {}
    return this._get('height', parameters, callback)
  },

   /**
    * Get last founded block object
    * @param  {Function} callback
    * @return {Json}            		Last Block object
   */
  lastBlock(callback) {
    let parameters = {}
    return _get('lastblock', parameters, callback)
  },

  /**
   * Get block by signature
   * @param  {String}			block hash signature
   * @param  {Function} callback
   * @return {Json}           	Block object
   */
  block(signature, callback) {
    let parameters = {}
    var endpoint = 'block/' + signature
    return _get(endpoint, parameters, callback)
  },

  /**
   * Get block by height
   * @param  {Number}   height   block height
   * @param  {Function} callback
   * @return {Json}            	 Block object
   */
  blockByHeight: function(height, callback) {
    let parameters = {}
    var endpoint = 'blockbyheight/' + height
    return _get(endpoint, parameters, callback)
  },

  /**
   * Get child block by parents block signature
   * @param  {String}   signature 	parents block signature
   * @param  {Function} callback
   * @return {Json}             	Block object
   */
  childBlock: function(signature, callback) {
    let parameters = {}
    var endpoint = 'childblock/' + signature
    return _get(endpoint, parameters, callback)
  },

  /**
   * Get blocks from height
   * @param  {Number}   fromheight Blocks start from height
   * @param  {Number}   limit      Blocks limit
   * @param  {Function} callback
   * @return {Array}               Array of blocks
   */
  blocks: function(fromheight, limit, callback) {
    let parameters = {};
    var endpoint = 'blocksfromheight/' + fromheight + '/' + limit
    return _get(endpoint, parameters, callback);
  },

  /**
   * Get blocks signatures from height
   * @param  {Number}   fromheight Blocks start from height
   * @param  {Number}   limit      Blocks limit
   * @param  {Function} callback
   * @return {Array}               Array of blocks signatures
   */
  blocksSignatures: function(fromheight, limit, callback) {
    let parameters = {}
    var endpoint = 'blockssignaturesfromheight/' + fromheight + '/' + limit
    return _get(endpoint, parameters, callback)
  },

  /**
   * Get record by signature
   * @param  {String}   signature Record signature
   * @param  {Function} callback
   * @return {json}               Record object
   */
  record: function(signature, callback) {
    let parameters = {}
    var endpoint = 'record/' + signature
    return _get(endpoint, parameters, callback)
  },

  /**
   * Get Record by Height and Sequence
   * @param  {Number}   height 		Record height
   * @param  {Number}   sequence
   * @param  {Function} callback
   * @return {json}               	Record object
   */
  recordByHeight: function(height, sequence, callback) {
    let parameters = {}
    var endpoint = 'record/' + height + '-' + sequence
    return _get(endpoint, parameters, callback)
  },

  /**
   * Validate given address
   * @param  {String}   address   Address seed
   * @param  {Function} callback
   * @return {boolean}            true or false
   */
  addressIsValid: function(address, callback) {
    let parameters = {}
    var endpoint = 'addressvalidate/' + address
    return _get(endpoint, parameters, callback)
  },

  /**
   * Public key of the given address
   * @param  {String}   address   Address seed
   * @param  {Function} callback
   * @return {sring}              Address public key
   */
  addressPublicKey: function(address, callback) {
    let parameters = {}
    var endpoint = 'addresspublickey/' + address
    return _get(endpoint, parameters, callback)
  },

  /**
   * Address Last Reference
   * @param  {String}   address   Address seed
   * @param  {Function} callback
   * @return {Number}              reference
   */
  addressLastReference: function(address, callback) {
    let parameters = {}
    var endpoint = 'addresslastreference/' + address
    return _get(endpoint, parameters, callback)
  },

  /**
   * Address Uncorfirmed Last Reference
   * @param  {String}   address   Address seed
   * @param  {Function} callback
   * @return {Number}              reference
   */
  addressUnconfirmedLastreRerence: function(address, callback) {
    let parameters = {}
    var endpoint = 'addressunconfirmedlastreference/' + address
    return _get(endpoint, parameters, callback)
  },

  /**
   * Address Generating Balance
   * @param  {String}   address   Address seed
   * @param  {Function} callback
   * @return {sring}              reference
   */
  addressGenBalance: function(address, callback) {
    let parameters = {}
    var endpoint = 'addressgeneratingbalance/' + address
    return _get(endpoint, parameters, callback)
  },

  /**
   * Address Assets
   * @param  {String}   address   Address seed
   * @param  {Function} callback
   * @return {json}               Assets object
   */
  addressAssets: function(address, callback) {
    let parameters = {}
    var endpoint = 'addressassets/' + address
    return _get(endpoint, parameters, callback)
  },

  /**
   * Address Asset Balance
   * @param  {String}   address   Address seed
   * @param  {Number}   address   Asset id
   * @param  {Function} callback
   * @return {Array}               Assets balance
   */
  addressAssetBalance: function(address, asset, callback) {
    let parameters = {}
    var endpoint = 'addressassetbalance/' + address + '/' + asset
    return _get(endpoint, parameters, callback)
  },

  /**
   * Verify Signature for JSON
   * @param  {String}   message
   * @param  {String}   signature Base58 signature
   * @param  {String}   publickey Base58 public key
   * @param  {Function} callback
   * @return {}
   */
  verifySign: function(message, signature, publickey, callback) {
    let parameters = {}
    return _post('verifysignature', parameters, callback)
  },
}
