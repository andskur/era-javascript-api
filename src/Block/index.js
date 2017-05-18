import {_get} from '../Utils/requests'

/**
 * Get block by signature
 * @param  {String}			block hash signature
 * @param  {Function} callback
 * @return {Json}           	Block object
 */
export function signature(signature, callback) {
  let parameters = {}
  var endpoint = 'block/' + signature
  return _get(endpoint, parameters, callback)
}

/**
 * Get last founded block object
 *
 * @param  {Function} callback
 * @return {Json}            		Last Block object
 */
export function last(callback) {
  let parameters = {}
  return _get('lastblock', parameters, callback)
}

/**
 * Get first founded block object
 * @param  {Function} callback
 * @return {Json}            		First Block object
 */
export function first(callback) {
  let parameters = {}
  return _get('firstblock', parameters, callback)
}

/**
 * Get block by height
 * @param  {Number}   height   block height
 * @param  {Function} callback
 * @return {Json}            	 Block object
 */
export function height(height, callback) {
  let parameters = {}
  var endpoint = 'blockbyheight/' + height
  return _get(endpoint, parameters, callback)
}

/**
 * Get child block by parents block signature
 * @param  {String}   signature 	parents block signature
 * @param  {Function} callback
 * @return {Json}             	Block object
 */
export function child(signature, callback) {
  let parameters = {}
  var endpoint = 'childblock/' + signature
  return _get(endpoint, parameters, callback)
}
