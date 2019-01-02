'use strict';

var request = require('superagent');
var assert = require('chai').assert;
var serviceAuthUrl = 'http://dls-cup-alpha-302611962.us-west-2.elb.amazonaws.com/lb-auth';
var accountid = 'cup1';
var extuserid = 'cmpqa_' + Date.now();
var spaceCode = 'INT-ORG-ONE';

describe('Space API Integration test', function () {
  
  var reqBody = {
    "ext_user_id": extuserid,
    "ref_id": extuserid,
    "ext_role": "teacher",
    "space_code": spaceCode
   };
  
  it('Join Space using Space Code', function (done) {
      request
        .post(serviceAuthUrl + '/accounts/' + accountid + '/join-institute-space')
        .send (reqBody)
        .set({'accept' : 'application/json'})
        .set({'content-type' : 'application/json'})
        .end(function (err, res) {
          if (err) { done(err); }
          else {
            console.log("response\n" + JSON.stringify(res.body, null, 1));
            done();
          }
        });
  });
});

