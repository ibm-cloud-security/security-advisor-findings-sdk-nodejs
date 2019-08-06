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
    instance = new findings.ApiOccurrence();
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

  describe('ApiOccurrence', function() {
    it('should create an instance of ApiOccurrence', function() {
      // uncomment below and update the code to test ApiOccurrence
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be.a(findings.ApiOccurrence);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

    it('should have the property resourceUrl (base name: "resource_url")', function() {
      // uncomment below and update the code to test the property resourceUrl
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

    it('should have the property noteName (base name: "note_name")', function() {
      // uncomment below and update the code to test the property noteName
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

    it('should have the property remediation (base name: "remediation")', function() {
      // uncomment below and update the code to test the property remediation
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

    it('should have the property createTime (base name: "create_time")', function() {
      // uncomment below and update the code to test the property createTime
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

    it('should have the property updateTime (base name: "update_time")', function() {
      // uncomment below and update the code to test the property updateTime
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

    it('should have the property providerId (base name: "provider_id")', function() {
      // uncomment below and update the code to test the property providerId
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

    it('should have the property context (base name: "context")', function() {
      // uncomment below and update the code to test the property context
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

    it('should have the property finding (base name: "finding")', function() {
      // uncomment below and update the code to test the property finding
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

    it('should have the property kpi (base name: "kpi")', function() {
      // uncomment below and update the code to test the property kpi
      //var instance = new findings.ApiOccurrence();
      //expect(instance).to.be();
    });

  });

}));
