const cats = ['fluffy','spike','killer'];
console.log ('1st cat',cats [0]);

const favoriteAnimal = 'cow';
const favoriteAnimayArray = favoriteAnimal.split(',');//['cow', 'bear','dog']
console.log('favoriteAnimalArray',favoriteAnimayArray);

const numArray = [ 1,2,3,4,5];
const newNum = numArray.join('');
console.log('newNum,newNum');

//mini challenge
//yes if its a palindrome
const  palChecker = (word) => {
if(palChecker) {
    console.log(`${word}' IS a palindrome`)
} else{
    consle.log(`${word} NOT a palindrome`)
}

};
palChecker('mom');//yes
palChecker('monkeybutt');//no
palChecker('racecar');//yes
console.log