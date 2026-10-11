let stringLength = function (str, len) {
  return str.length <= len;
};
// Cтрока короче 20 символов
stringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
stringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
stringLength('проверяемая строка', 10); // false


let isPalindrome = function(str) {
  let newStr = String(str).replaceAll(' ', '').toLowerCase();
  let emptyStr = '';

  for (let i = newStr.length - 1; i >= 0; i--) {
    emptyStr += newStr.at(i);
  }

  return emptyStr === newStr;
};
// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс');  // false
// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true

let nums = function(str) {
  let numStr = String(str).replace(/\D/g, '');
  let num = Math.abs(Number(numStr));
  if (numStr == '') {
    return 'NaN';
  }
  else {
    return num;
  }
};
nums('2023 год');            // 2023
nums('ECMAScript 2022');     // 2022
nums('1 кефир, 0.5 батона'); // 105
nums('агент 007');           // 7
nums('а я томат');           // NaN
nums(2023); // 2023
nums(-1);   // 1
nums(1.5);  // 15
