let numbers = [Number];

numbers.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;

});

console.log(numbers);



