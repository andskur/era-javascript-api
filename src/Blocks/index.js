import {_get} from '../Utils/requests'

/**
 * Get blocks from height
 * @param  {Number}   fromheight Blocks start from height
 * @param  {Number}   limit      Blocks limit
 * @param  {Function} callback
 * @return {Array}               Array of blocks
 */
export function from(fromheight, limit, callback) {
  let parameters = {};
  var endpoint = 'blocksfromheight/' + fromheight + '/' + limit
  return _get(endpoint, parameters, callback);
}

/**
 * Get blocks signatures from height
 * @param  {Number}   fromheight Blocks start from height
 * @param  {Number}   limit      Blocks limit
 * @param  {Function} callback
 * @return {Array}               Array of blocks signatures
 */
export function signatures(fromheight, limit, callback) {
  let parameters = {}
  var endpoint = 'blockssignaturesfromheight/' + fromheight + '/' + limit
  return _get(endpoint, parameters, callback)
}
