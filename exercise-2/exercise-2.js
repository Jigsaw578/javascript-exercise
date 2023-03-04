function reverseString(string) {
  if (!string) {
    return
  } 
  console.log(string.split("").reverse().join(""));
}
reverseString("Hello there")