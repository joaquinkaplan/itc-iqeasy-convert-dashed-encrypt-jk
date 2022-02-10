/*
Make a function that encrypts a given input with these steps:

Input: "apple"

Step 1: Reverse the input: "elppa"

Step 2: Replace all vowels using the following chart:

a => 0
e => 1
i => 2
o => 2
u => 3

// "1lpp0"
Step 3: Add "aca" to the end of the word: "1lpp0aca"

Output: "1lpp0aca"

Examples
encrypt("banana") ➞ "0n0n0baca"

encrypt("karaca") ➞ "0c0r0kaca"

encrypt("burak") ➞ "k0r3baca"

encrypt("alpaca") ➞ "0c0pl0aca"
Notes
All inputs are strings, no uppercases and all output must be strings.
*/

//EXPLAINED JK: THE ARGUMENT IS THE STRING YOU INCLUDE WHEN YOU CALL THE FUNCTION. 
// - CREATE AN OBJECT CALLED replaceObject, DETERMINING THE VALUE EACH VOWEL HAS TO TAKE WHEN REPLACED. 
// - THEN CREATE A VARIABLE CALLED step1, EXECUTE THE split METHOD WITH NO SPACES TO AVOID SEPARATION. 
// - EXECUTE THE reverse METHOD TO REVERSE THE WORD. 
// - EXECUTE THE join METHOD TO MAKE IT A STRING AGAIN AND NOT AN ARRAY. 
// - THEN EXECUTE THE replace METHOD TO REPLACE THE VOWELS (MENTIONED VIA REGEX) WITH THE CORRECT VALUE ACCORDING TO replaceObject. 
// - LAST, CREATE THE output VARIABLE, THAT GRABS THE RESULT OF step1 AND ADS "aca", USING += AND NOT =, SO THE WORD DOESN'T GET REPLACED BY "aca". RETURN OUTPUT. 


function encrypt(string) {
  const replaceObject ={
    a:'0',
    e:'1',
    i:'2',
    o:'2',
    u:'3'
  }
  let step1 = string.split("").reverse("").join("").replace(/[aeiou]/g, value=>{
    return replaceObject[value]})
  let output = step1+="aca"
  return output
}

encrypt("karaca")
encrypt("burak")
encrypt("banana")
encrypt("alpaca")
encrypt("hello")

exports.solution = encrypt;



// SEE WITH MENTORS