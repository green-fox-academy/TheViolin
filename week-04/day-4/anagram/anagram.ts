class Words {

  anagram(word1: string, word2: string) {
    let string1: string = word1.toLowerCase().split('').sort().join('');
    let string2: string = word2.toLowerCase().split('').sort().join('');
    
    if (string1 === string2) {
      return true;
    } else {
      return false;
    }
  }
}
let word = new Words;
console.log(word.anagram('bal', 'laba'));

export { Words };