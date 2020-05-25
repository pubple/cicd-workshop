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
});
