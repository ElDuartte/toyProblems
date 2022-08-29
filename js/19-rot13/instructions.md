# Rot13

**ROT13** is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. **ROT13** is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

- When the ascii code is more than 122 needs to reset to 97 and keep adding

- Keep adding over 122 after that use the difference between 122 and the result of the sum and add it to 97
