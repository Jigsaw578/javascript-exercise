function repeatString(string, num) {
  if (!string || !num) {
    return
  }  
  let result = '';

  // const array = Array.from({length: num}, (_, i) => i + 1)
  // Array.forEach(element => {
    
  // });
  // const resul = array.reduce(function (pre) {
  //   return pre + string
  // }, "")
  for (let i = 0; i < num; i++) {
    result += string
  }

  console.log(result);
}

repeatString("hey", 3)