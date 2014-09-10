var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Calculator = require('./models/calculator-model');
var CalculatorView = require('./views/calculator-view');

var calculator = new Calculator;
var calculatorView = new CalculatorView({model: calculator});

$('#results').append(calculatorView.el);
