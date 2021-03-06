/*
This is my solution to the Codewars Challenge: Create Phone Number
This function accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
This is admittedly a very easy problem.
*/

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
