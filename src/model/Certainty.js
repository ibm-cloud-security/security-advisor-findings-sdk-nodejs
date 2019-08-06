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
 * Enum class Certainty.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "LOW"
   * @const
   */
  "LOW": "LOW",
  /**
   * value: "MEDIUM"
   * @const
   */
  "MEDIUM": "MEDIUM",
  /**
   * value: "HIGH"
   * @const
   */
  "HIGH": "HIGH"};

/**
 * Returns a <code>Certainty</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/Certainty} The enum <code>Certainty</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;
