"use strict";

var expect = require('chai').expect;
var Backbone =require('backbone');
var sinon = require('sinon');

var Calculator = require('../../app/js/models/calculator-model'); 

describe('Calculator Model', function(){
  var calculator;
  before(function(done){
    this.mock = sinon.mock(Backbone);
    calculator = new Calculator();
    done();
  });

  it('should be a backbone object', function(done){
    expect(calculator.get('mean')).to.be.eql(0);
    done();
  });

  it('should return mean based off input', function(done){
    calculator.set('numberArray', [1,2,3,4]);
    calculator.getMean();
    expect(calculator.get('mean')).to.be.eql(2.5);
    done();
  });

  it('should return median based off input', function(done){
    calculator.set('numberArray', [1,2,3,4]);
    calculator.getMedian();
    expect(calculator.get('median')).to.be.eql(2.5);
    done();
  });
  
  it('should return mode based off input', function(done){
    calculator.set('numberArray', [1,2,2,4]);
    calculator.getMode();
    expect(calculator.get('mode')).to.be.eql([2]);
    done();
  });
});
