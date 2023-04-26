/*
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number
of characters then it should replace the missing second
character of the final pair with an underscore ('_').
Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

const solution = (str) => {
  const newArr = [];
  str = str.split("");
  let sum = "";
  for (let i = 0; i < str.length; i++) {
    sum = str[i] + str[i + 1];
    console.log(sum);
    if (i % 2 != 0) continue;
    if (str[i + 1] == undefined) sum = str[i] + "_";
    newArr.push(sum);
  }

  return newArr;
};
const res = solution("abcdefc");
console.log(res);
