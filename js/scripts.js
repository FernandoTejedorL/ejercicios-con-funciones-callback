// 1 - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numMultiplied = (numbers) => {
  result1.forEach((number) => {
    console.log(number * result1.indexOf(number));
  });
};
const result1 = [1, 3, 5, 4, 8, 9];
numMultiplied(result1);

// 2 - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1

const dividedIndex = (numbers) => {
  return numbers.map((number) => number / (numbers.indexOf(number) + 1));
};
const result2 = dividedIndex([2, 6, 8, 9, 10, 15]);
console.log(result2);

// 3 - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const wordsToUpper = (letters) => {
  return letters.map((letter) => letter.toUpperCase());
};
const result3 = wordsToUpper(['hola', 'mundo', 'adios']);
console.log(result3);

// 4 - Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen
//por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. Tiene que funcionar con mayúsculas
//y minúsculas.

const beginsWith = (words, letter) => {
  const result = words.filter(
    (word) => word.charAt(0).toLowerCase() === letter.toLowerCase()
  );
  if (result.length === 0) {
    return `Ninguna palabra emplieza por la letra ${letter}`;
  }
  return result;
};
const result4 = beginsWith(['hola', 'mundo', 'adios', 'hija'], 'h');
console.log(result4);

// 5 - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const sumNumbers = (numbers) => {
  return (result = numbers.reduce((acc, number) => {
    return acc + number;
  }));
};
const result5 = sumNumbers([2, 2, 2, 2, 2, 3]);
console.log(result5);

// 6 - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

const NumSquaCube = (numbers) => {
  result6.forEach((number) => {
    console.log(
      `Número ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(
        number,
        3
      )}`
    );
  });
};
const result6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
NumSquaCube(result6);

// 7 - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const vowelsUpper = (word) => {
  let newWord = '';
  const vowels = 'aeiou';
  for (const letter of word) {
    if (vowels.includes(letter)) {
      newWord += letter.toUpperCase();
    } else {
      newWord += letter;
    }
  }
  return newWord;
};
const result7 = vowelsUpper('gato');
console.log(result7);

// 8 - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const overFive = (numbers) => {
  return (result = numbers.filter((number) => {
    return number > 5;
  }));
};

const overFive2 = (numbers) => {
  return (result = numbers.some((number) => {
    return number > 5;
  }));
};
const result8 = overFive([1, 3, 5, 8, 9, 10]);
const result8too = overFive2([1, 3, 5, 8, 9, 10]);
console.log(result8);
console.log(result8too);

// 9 - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud,
//por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

const wordsLength = (words, number) => {
  return (result = words.filter((word) => {
    return word.length === number;
  }));
};
const result9 = wordsLength(['hola', 'adios', 'gato', 'perro', 'casa'], 4);
console.log(result9);

// 10 - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean
//divisores de ese número

const dividedBy = (numbers, divider) => {
  return (result = numbers.filter((number) => {
    return divider % number === 0;
  }));
};
const result10 = dividedBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20);
console.log(result10);

// 11 - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
//   const array = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Bob', age: 20 }
//   ];

const usersUnder = (words) => {
  let newNames = [];
  const result = words.filter((word) => {
    if (word.age < 30) {
      newNames.push(word.name);
    }
  });
  return newNames;
};

const array = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 },
];
const result11 = usersUnder(array);
console.log(result11);

// 12 - Crea una función que reciba un array con 5 números y te diga si todos son pares o no.

const allEven = (numbers) => {
  let result = numbers.every((number) => {
    return number % 2 === 0;
  });
  if (result === true) {
    return `Todos los numeros son pares`;
  }
  return `No todos los números son pares`;
};
const result12 = allEven([2, 4, 6, 8]);
console.log(result12);

// 13 - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

const wordsOrdered = (words) => {
  return (result = words.sort((wordA, wordB) => {
    if (wordA.length > wordB.length) return 1;
    if (wordA.length < wordB.length) return -1;
    return 0;
  }));
};
const result13 = wordsOrdered(['asa', 'piña', 'la', 'telita']);
console.log(result13);

// 14 - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas.
//Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse()

const backwardsWord = (word) => {
  let newBackword = '';
  for (let counter = word.length; counter >= 0; counter--) {
    newBackword += word.charAt(counter);
  }
  return newBackword;
};
const result14 = backwardsWord('Mariposas');
console.log(result14);

// ## Retos!!

// 15 - Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número,
//es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

const newArray = (numbers) => {
  return numbers.map(
    (number) =>
      Number(String(number).charAt(0)) + Number(String(number).charAt(1))
  );
};
const result15 = newArray([21, 34, 87, 10, 28]);
console.log(result15);

// 16 - Utilizando el array a continuación, crea una función que reciba un id de usuario y borre ese usuario del array.

let usersArray = [
  {
    id: 'user001',
    name: 'Juan',
    surname: 'Pérez',
    age: 30,
  },
  {
    id: 'user002',
    name: 'María',
    surname: 'González',
    age: 25,
  },
  {
    id: 'user003',
    name: 'Pedro',
    surname: 'Sánchez',
    age: 35,
  },
  {
    id: 'user004',
    name: 'Ana',
    surname: 'Martínez',
    age: 28,
  },
  {
    id: 'user005',
    name: 'Luis',
    surname: 'López',
    age: 40,
  },
];
const deleteUser = (id) => {
  let newUsersArray = [];
  for (let counterId = 0; counterId < usersArray.length; counterId++) {
    if (usersArray[counterId].id !== id) {
      newUsersArray.push(usersArray[counterId]);
    }
  }
  return newUsersArray;
};

const result16 = deleteUser('user002');
console.log(result16);
