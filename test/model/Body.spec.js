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
    instance = new findings.Body();
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

  describe('Body', function() {
    it('should create an instance of Body', function() {
      // uncomment below and update the code to test Body
      //var instance = new findings.Body();
      //expect(instance).to.be.a(findings.Body);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property relatedUrl (base name: "related_url")', function() {
      // uncomment below and update the code to test the property relatedUrl
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property expirationTime (base name: "expiration_time")', function() {
      // uncomment below and update the code to test the property expirationTime
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property createTime (base name: "create_time")', function() {
      // uncomment below and update the code to test the property createTime
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property updateTime (base name: "update_time")', function() {
      // uncomment below and update the code to test the property updateTime
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property providerId (base name: "provider_id")', function() {
      // uncomment below and update the code to test the property providerId
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property shared (base name: "shared")', function() {
      // uncomment below and update the code to test the property shared
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property reportedBy (base name: "reported_by")', function() {
      // uncomment below and update the code to test the property reportedBy
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property finding (base name: "finding")', function() {
      // uncomment below and update the code to test the property finding
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property kpi (base name: "kpi")', function() {
      // uncomment below and update the code to test the property kpi
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property card (base name: "card")', function() {
      // uncomment below and update the code to test the property card
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

    it('should have the property section (base name: "section")', function() {
      // uncomment below and update the code to test the property section
      //var instance = new findings.Body();
      //expect(instance).to.be();
    });

  });

}));
