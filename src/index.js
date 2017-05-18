'use strict'

import {_get} from './requests'

export default {
  lastBlock: function(callback) {
    let parameters = {}
    return _get('lastblock', parameters, callback)
  },
}
