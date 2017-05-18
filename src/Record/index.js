import {_get} from '../Utils/requests'

/**
 * Get record by signature
 * @param  {String}   signature Record signature
 * @param  {Function} callback
 * @return {json}               Record object
 */
export function signature(signature, callback) {
  let parameters = {}
  var endpoint = 'record/' + signature
  return _get(endpoint, parameters, callback)
}

/**
 * Get Record by Height and Sequence
 * @param  {Number}   height 		Record height
 * @param  {Number}   sequence
 * @param  {Function} callback
 * @return {json}               	Record object
 */
export function height(height, sequence, callback) {
  let parameters = {}
  var endpoint = 'record/' + height + '-' + sequence
  return _get(endpoint, parameters, callback)
}
