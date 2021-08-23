function consecutiveSubstrings(string) {
  let strArr = []
  let letterArr = string.split("")
  for(let i = 0; i < letterArr.length; i++){
    let firstLetter = letterArr[i]
    if(!strArr.includes(firstLetter)){
      strArr.push(firstLetter)
    }
    for(let j = i+1; j < letterArr.length; j++){
      if(!strArr.includes(firstLetter + letterArr.slice(i+1, j+1).join(""))){
        strArr.push(firstLetter + letterArr.slice(i+1, j+1).join(""))
      }
    }
  }
  return strArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
