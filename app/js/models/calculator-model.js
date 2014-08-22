var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  defaults: {
    numberArray: [],
    mean: 0,
    median: 0,
    mode: [] 
  },

  getAttr: function(){
    console.log(this.attributes);
  },

  getMean: function(){
    var data = this.get('numberArray');
    var sum = 0;
    for(var i = 0; i < data.length; i++) sum += Number(data[i]);
    this.set({mean: sum / (data.length)});
  },

  getMode: function(){
    var numbers = this.get('numberArray');
    var results=[];

    for(var i = 0; i < numbers.length; i++){
      var el = Number(numbers[i]);
      if(results[el]){
      
        results[el]+=1;
      }else{
        results[el]=1;
      }
    }
    var modes=[];
    var maxCount = 0;
    for(var i = 0; i < results.length; i++){
      if(results[i] > maxCount){
        modes=[];
        modes.push(i);
        maxCount = results[i];
      }else if(results[i] === maxCount){
        modes.push(i);
      }
    }
    this.set({mode: modes});
    },

  getMedian: function(){
    var numbers = this.get('numberArray');
    // first we sort the array
    numbers.sort();
    // next check for even or odd
    if(numbers.length % 2 === 0){
      var i = numbers.length / 2;
      this.set({median: (Number(numbers[i]) + Number(numbers[i-1])) / 2});
    } else {
      var i = (numbers.length - 1) / 2;
      this.set({median: Number(numbers[i])});
    }  
  }
});
