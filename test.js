
const assert = require('assert');
const loginController = require('./index');

describe('Basic Mocha String Test', function(){

    it('should return number of characters', function(){
        assert("Hello".length,4);
    });
});

it('should return valid userId', function(done){
    loginController.isValidUserIdAsync(['abc123','xyz321'], 'abc123', function(isValid){
        assert.equal(isValid,true);
        done();
    });
    
});