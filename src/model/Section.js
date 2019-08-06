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
 * The Section model module.
 * @module model/Section
 */

/**
 * Constructs a new <code>Section</code>.
 * Card provides details about a card kind of note
 * @alias module:model/Section
 * @class
 * @param title {String} The title of this section
 * @param image {String} The image of this section
 */
var exports = function(title, image) {
  var _this = this;

  _this['title'] = title;
  _this['image'] = image;
};

/**
 * Constructs a <code>Section</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Section} obj Optional instance to populate.
 * @return {module:model/Section} The populated <code>Section</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
      obj['title'] = ApiClient.convertToType(data['title'], 'String');
    }
      if (data.hasOwnProperty('image')) {
      obj['image'] = ApiClient.convertToType(data['image'], 'String');
    }
    }
  return obj;
}

/**
 * The title of this section
 * @member {String} title
 */
exports.prototype['title'] = undefined;
/**
 * The image of this section
 * @member {String} image
 */
exports.prototype['image'] = undefined;



module.exports = exports;

