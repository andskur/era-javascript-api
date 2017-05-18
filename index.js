module.exports = (function() {
    'use strict';

    const request = require('request');

    const version = require('./package.json').version;
    const API_URL = 'http://datachains.world:9067/api/';
    const USER_AGENT = `${require('./package.json').name} ${version}`;

    function ERA(){}

    ERA.USER_AGENT = USER_AGENT;

    // Prototype
    ERA.prototype = {
        constructor: ERA,

        // Make an API request
        _request: function(options, callback){
            if (!('headers' in options)){
                options.headers = {};
            }

            options.json = true;
            options.headers['User-Agent'] = ERA.USER_AGENT;
            options.headers['Access-Control-Allow-Origin'] = '*';
            // console.log(options.headers);
            options.timeout = this.options && this.options.socketTimeout || 10000;

            request(options, function(error, response, body) {
                let err = error;
                if (!err && response.statusCode !== 200) {
                    let errMsg = `ERA error ${response.statusCode}: ${response.statusMessage}`;
                    if (typeof response.body === 'object' && response.body.hasOwnProperty('error')) {
                        errMsg = `${errMsg}. ${response.body.error}`;
                    }

                    err =  new Error(errMsg);
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

        // Make a GET API request
        _get: function(command, parameters, callback){
            let param = parameters;
            let options = {
                method: 'GET',
                url: API_URL + command,
                qs: param,
            };
            // console.log(options)
            return this._request(options, callback);
        },

        // Make a POST API request
        _post: function(command, parameters, callback){
            let param = parameters;
            param.nonce = nonce(16);
            let options = {
                method: 'POST',
                url: API_URL + command,
                form: param
            };
            return this._request(options, callback);
        },

        // get last block
        lastBlock: function(callback) {
            let parameters = {};
            return this._get('lastblock', parameters, callback);
        },

        // get last block hight
        lastHeight: function(callback) {
            let parameters = {};
            return this._get('height', parameters, callback);
        },

        // get block by signature
        block: function(signature, callback) {
            let parameters = {};
            var endpoint = 'block' + signature
            return this._get(endpoint, parameters, callback);
        },

        // get block by height
        blockByHeight: function(height, callback) {
            let parameters = {};
            var endpoint = 'blockbyheight/' + height
            return this._get(endpoint, parameters, callback);
        },

        // get child block
        childBlock: function(signature, callback) {
            let parameters = {};
            var endpoint = 'childblock/' + signature
            return this._get(endpoint, parameters, callback);
        },

        // get blocks from height
        blocks: function(fromheight, limit, callback) {
            let parameters = {};
            var endpoint = 'blocksfromheight/' + fromheight + '/' + limit
            return this._get(endpoint, parameters, callback);
        },

        // get blocks signatures from height
        blocksSignatures: function(fromheight, limit, callback) {
            let parameters = {};
            var endpoint = 'blockssignaturesfromheight/' + fromheight + '/' + limit
            return this._get(endpoint, parameters, callback);
        },

        // get record by signature
        record: function(signature, callback) {
            let parameters = {};
            var endpoint = 'record/' + signature
            return this._get(endpoint, parameters, callback);
        },

        // get record by Height and Sequence
        recordByHeight: function(height, sequence, callback) {
            let parameters = {};
            var endpoint = 'record/' + height + '-' + sequence
            return this._get(endpoint, parameters, callback);
        },

        // Validate address
        addressIsValid: function(address, callback) {
            let parameters = {};
            var endpoint = 'addressvalidate/' + address
            return this._get(endpoint, parameters, callback);
        },

        // Address Public Key
        addressPublicKey: function(address, callback) {
            let parameters = {};
            var endpoint = 'addresspublickey/' + address
            return this._get(endpoint, parameters, callback);
        },

        // Address Last Reference
        addressLastReference: function(address, callback) {
            let parameters = {};
            var endpoint = 'addresslastreference/' + address
            return this._get(endpoint, parameters, callback);
        },

        // Address Uncorfirmed Last Reference
        addressUnconfirmedLastreRerence: function(address, callback) {
            let parameters = {};
            var endpoint = 'addressunconfirmedlastreference/' + address
            return this._get(endpoint, parameters, callback);
        },

        // Address Generating Balance
        addressGenBalance: function(address, callback) {
            let parameters = {};
            var endpoint = 'addressgeneratingbalance/' + address
            return this._get(endpoint, parameters, callback);
        },

        // Address Assets
        addressAssets: function(address, callback) {
            let parameters = {};
            var endpoint = 'addressassets/' + address
            return this._get(endpoint, parameters, callback);
        },

        // Address Asset Balance
        addressAssetBalance: function(address, asset, callback) {
            let parameters = {};
            var endpoint = 'addressassetbalance/' + address + '/' + asset
            return this._get(endpoint, parameters, callback);
        },

        // Verify Signature for JSON
        verifySign: function(message, signature, publickey, callback){
            let parameters = {};
            return this._post('verifysignature', parameters, callback);
        },
    };
    return ERA;
})();