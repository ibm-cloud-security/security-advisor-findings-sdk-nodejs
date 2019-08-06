/**
 * Findings API
 * The Findings API 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

var ApiClient = require('../ApiClient');



/**
 * The SocketAddress model module.
 * @module model/SocketAddress
 */

/**
 * Constructs a new <code>SocketAddress</code>.
 * It provides details about a socket address
 * @alias module:model/SocketAddress
 * @class
 * @param address {String} The IP address of this socket address
 */
var exports = function(address) {
  var _this = this;

  _this['address'] = address;

};

/**
 * Constructs a <code>SocketAddress</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SocketAddress} obj Optional instance to populate.
 * @return {module:model/SocketAddress} The populated <code>SocketAddress</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
      obj['address'] = ApiClient.convertToType(data['address'], 'String');
    }
      if (data.hasOwnProperty('port')) {
      obj['port'] = ApiClient.convertToType(data['port'], 'Number');
    }
    }
  return obj;
}

/**
 * The IP address of this socket address
 * @member {String} address
 */
exports.prototype['address'] = undefined;
/**
 * The port number of this socket address
 * @member {Number} port
 */
exports.prototype['port'] = undefined;



module.exports = exports;

