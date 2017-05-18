'use strict';

import request from 'request';

const version = require('./package.json').version;
const API_URL = 'http://datachains.world:9067/api/';
const USER_AGENT = `${require('./package.json').name} ${version}`;

export default {
  _request: function (options, callback){
    if (!('headers' in options)){
      options.headers = {};
    }

    options.json = true;
    options.headers['User-Agent'] = USER_AGENT;
  options.headers['Access-Control-Allow-Origin'] = '*';
  // console.log(options.headers);
  options.timeout = this.options && this.options.socketTimeout || 10000;

  request(options, function (error, response, body) {
    let err = error;
    if (!err && response.statusCode !== 200) {
      let errMsg = `ERA error ${response.statusCode}: ${response.statusMessage}`;
      if (typeof response.body === 'object' && response.body.hasOwnProperty('error')) {
        errMsg = `${errMsg}. ${response.body.error}`;
      }
      err = new Error(errMsg);
    }

    if (!err && (typeof response.body === 'undefined' || response.body === null)) {
      err = new Error('ERA error: Empty response');
    }

    if (!err && body.error) {
      err = new Error(body.error);
    }

    callback(body, error);
  });
  return this;
  },
}
