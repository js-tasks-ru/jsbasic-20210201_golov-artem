function ucFirst(str) {
  let newStr = ''
  for (let char of str){
    if (char === str[0]) {
      newStr = newStr + char.toUpperCase()
    } else {
      newStr = newStr + char
    }
  }
  return newStr
}

