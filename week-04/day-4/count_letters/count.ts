export function counter(word: string) {
  let chars = word.split('');
  let lettersCount = {};

  for (let i = 0; i < word.length; i++) {
    if (lettersCount[chars[i]] === undefined) {
      lettersCount[chars[i]] = 0;
    }

    lettersCount[chars[i]]++;
  }
  return lettersCount;
}
