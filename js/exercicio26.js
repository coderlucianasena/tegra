// function countVowel(str) { 

//     const count = str.match(/[aeiou]/gi).length;

//     return count;
// }

// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(resul t);

// const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}


const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);