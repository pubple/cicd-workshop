var base_url = "http://localhost:3000";

var expect = require("chai").expect;
var request = require("request");

describe("Sample Server", function () {
  describe("GET /", function () {
    it("Main page content", function (done) {
      request(base_url, function (error, response, body) {
        expect(body).to.equal("Hello World");
        done();
      });
    });
    it("Main page status", function (done) {
      request(base_url, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
  describe("GET /about", function () {
    it("About page status", function (done) {
      request(base_url + "/about", function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it("About page content", function (done) {
      request(base_url + "/about", function (error, response, body) {
        expect(body).to.equal("About Vivas");
        done();
      });
    });
    it("About page content", function (done) {
      request(base_url + "/intro", function (error, response, body) {
        expect(body).to.equal("Introduction of Vivas");
        done();
      });
    });
  });
});
