/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(name) {
  if (name ==null) return false;
  let isValidValue = name != '' && ! name.includes(' ') && name.length >= 4 
  return isValidValue
}

function sayHello() {
  return userName = ('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, $ {userName} !`);
  } else {
    print('Некорректное имя');
  }
}

sayHello()