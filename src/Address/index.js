import {_get} from '../Utils/requests'

/**
 * Validate given address
 * @param  {String}   address   Address seed
 * @param  {Function} callback
 * @return {boolean}            true or false
 */
export function isValid(address, callback) {
  let parameters = {}
  var endpoint = 'addressvalidate/' + address
  return _get(endpoint, parameters, callback)
}

/**
 * Public key of the given address
 * @param  {String}   address   Address seed
 * @param  {Function} callback
 * @return {sring}              Address public key
 */
export function publicKey(address, callback) {
  let parameters = {}
  var endpoint = 'addresspublickey/' + address
  return _get(endpoint, parameters, callback)
}

/**
 * Address Last Reference
 * @param  {String}   address   Address seed
 * @param  {Function} callback
 * @return {Number}              reference
 */
export function lastReference(address, callback) {
  let parameters = {}
  var endpoint = 'addresslastreference/' + address
  return _get(endpoint, parameters, callback)
}

/**
 * Address Uncorfirmed Last Reference
 * @param  {String}   address   Address seed
 * @param  {Function} callback
 * @return {Number}              reference
 */
export function unconfirmedLastRerence(address, callback) {
  let parameters = {}
  var endpoint = 'addressunconfirmedlastreference/' + address
  return _get(endpoint, parameters, callback)
}

/**
 * Address Generating Balance
 * @param  {String}   address   Address seed
 * @param  {Function} callback
 * @return {sring}              reference
 */
export function genBalance(address, callback) {
  let parameters = {}
  var endpoint = 'addressgeneratingbalance/' + address
  return _get(endpoint, parameters, callback)
}

/**
 * Address Assets
 * @param  {String}   address   Address seed
 * @param  {Function} callback
 * @return {json}               Assets object
 */
export function assets(address, callback) {
  let parameters = {}
  var endpoint = 'addressassets/' + address
  return _get(endpoint, parameters, callback)
}

/**
 * Address Asset Balance
 * @param  {String}   address   Address seed
 * @param  {Number}   address   Asset id
 * @param  {Function} callback
 * @return {Array}               Assets balance
 */
export function assetBalance(address, asset, callback) {
  let parameters = {}
  var endpoint = 'addressassetbalance/' + address + '/' + asset
  return _get(endpoint, parameters, callback)
}
