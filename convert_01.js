/*
Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

Examples
convert(1, 3) ➞ 3780

convert(2, 0) ➞ 7200

convert(0, 0) ➞ 0
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

//EXPLAINED JK: a & b ARE THE ARGUMENTS OF THE FUNCTION, AS VARIABLES THAT CAN BE CALLED AS NUMBERS WHEN CALLING THE FUNCTION. CREATE A VARIABLE CALLED output INSIDE THE FUNCTION, MAKE 60 TIMES THE FIRST NUMBER AND ADD B, THE RESULT WILL BE THE TOTAL MINUTES OF THE INTEGERS. THEN MAKE 60 TIMES THIS RESULT (TOTAL SECONDS), AND RETURN OUTPUT. 

function convert(a,b) {
  let output = (a*60 + b) * 60;
  return output;
}

convert(1, 0)
convert(1, 3)
convert(0, 30)


exports.solution = convert;
