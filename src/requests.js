import request from 'request'

const version = require('../package.json').version
const API_URL = 'http://datachains.world:9067/api/'
const USER_AGENT = `${require('../package.json').name} ${version}`

/**
 * Make Api request to ERA
 * @param  {Array}    options   request options
 * @param  {Function} callback
 * @return {Json}               return Json response from Api server
 */
function _request(options, callback) {
  if (!('headers' in options)) {
    options.headers = {}
  }

  options.baseUrl = API_URL
  options.json = true
  options.headers['User-Agent'] = USER_AGENT
  options.headers['Access-Control-Allow-Origin'] = '*'
  options.timeout = 10000

  request(options, function(error, response, body) {
    console.log(options)

    let err = error

    if (!err && response.statusCode !== 200) {
      let errMsg = `ERA error ${response.statusCode}: ${response.statusMessage}`

      if (typeof response.body === 'object' && response.body.hasOwnProperty('error')) {
        errMsg = `${errMsg}. ${response.body.error}`
      }
      err = new Error(errMsg)
    }

    if (!err && (typeof response.body === 'undefined' || response.body === null)) {
      err = new Error('ERA error: Empty response')
    }

    if (!err && body.error) {
      err = new Error(body.error)
    }

    callback(body, error)
  })
  return this
}

/**
 * Make public Api request
 * @param  {String}   method      Request method
 * @param  {String}   command     Api command (endpoint)
 * @param  {Array}    parameters  GET request query parameters
 * @param  {Function} callback
 * @return {Json}                 return Json response from Api server
 */
export function _public(method, command, parameters, callback) {
  let param = parameters

  let options = {
    method: method,
    uri: command,
    qs: param,
  }
  return _request(options, callback)
}

/**
 * Make GET Api request
 * @param  {String}   command     Api command (endpoint)
 * @param  {Array}    parameters  GET request query parameters
 * @param  {Function} callback
 * @return {Json}                 return Json response from public api request
 */
export function _get(command, parameters, callback) {
  return _public('GET', command, parameters, callback)
}

/**
 * Make POST Api request
 * @param  {String}   command     Api command (endpoint)
 * @param  {Array}    parameters  GET request query parameters
 * @param  {Function} callback
 * @return {Json}                 return Json response from public api request
 */
export function _post(command, parameters, callback) {
  return _public('POST', command, parameters, callback)
}
