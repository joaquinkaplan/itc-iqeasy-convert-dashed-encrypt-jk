/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

//EXPLAINED JK: THE ARGUMENT IS THE STRING YOU INCLUDE WHEN YOU CALL THE FUNCTION. CREATE A VARIABLE CALLED output INSIDE THE FUNCTION. output EXECUTES THE replace METHOD, FINDING ALL VOWELS (BOTH LOWER AND UPPERCASE) WITH A REGEX, AND TELLS TO ADD A DASH BEFORE AND AFTER THE VALUE INCLUDED IN THE REGEX. THEN RETURN OUTPUT. 

function dashed(string) {
let output = string.replace(/[aeiouAEIOU]/g, '-$&-')
return output;
  }


dashed("Carpe Diem")
dashed("Fight for your right to party!")
dashed("Finishing off someone’s sentence is annoying, even if you have guessed correctly. Add to that rude, if they stutter.")
dashed("Fear the soldier who stammers, for he is very fast at pulling the triger.")
dashed("Thank you, I said bravely, dropping the syllables cleanly, like marbles, and secretly full of the most pathetic pride imaginable.")

exports.solution = dashed;