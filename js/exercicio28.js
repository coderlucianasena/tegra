var arr = ["885.9", "984.9", "444.9", "528.9", "528.9"];
// var arr = ["885.9", "984.9", "444.9", "528.9", "528.9"];
// var min = Math.min(...arr);
// var max = Math.max(...arr);


// console.log(min); // 444.9
// console.log(max); // 984.9  
var arr = ["885.9", "984.9", "444.9", "528.9", "528.9"];
var max = arr.map(Number).reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(max); // 984.9

var arr = ["885.9", "984.9", "444.9", "528.9", "528.9"];
console.log(_.min(arr)); //444.9
console.log(_.max(arr)); //984.9

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>