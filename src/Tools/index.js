import {_post, _get} from '../Utils/requests'

/**
 * Get last founded block height
 * @param  {Function} callback
 * @return {Number}            Block height
*/
export function lastHeight(callback) {
  let parameters = {}
  return _get('height', parameters, callback)
}

/**
 * Verify Signature for JSON
 * @param  {String}   message
 * @param  {String}   signature Base58 signature
 * @param  {String}   publickey Base58 public key
 * @param  {Function} callback
 * @return {}
 */
export function verifySign(message, signature, publickey, callback) {
  let parameters = {}
  return _post('verifysignature', parameters, callback)
}
