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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.findings);
  }
}(this, function(expect, findings) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new findings.ApiListNotesResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ApiListNotesResponse', function() {
    it('should create an instance of ApiListNotesResponse', function() {
      // uncomment below and update the code to test ApiListNotesResponse
      //var instance = new findings.ApiListNotesResponse();
      //expect(instance).to.be.a(findings.ApiListNotesResponse);
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new findings.ApiListNotesResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextPageToken (base name: "next_page_token")', function() {
      // uncomment below and update the code to test the property nextPageToken
      //var instance = new findings.ApiListNotesResponse();
      //expect(instance).to.be();
    });

  });

}));
