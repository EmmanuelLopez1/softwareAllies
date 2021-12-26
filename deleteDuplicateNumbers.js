/**
 * * Write a Java program to sort and remove duplicates of a numeric or string array.
 * ? DELETE DUPLICATE ITEMS
 */

const stringArr = [
  "baby",
  "hello",
  "adios",
  "hola",
  "hello",
  "adios",
  "lapiz",
  "baby",
];
const numberArr = [9, 0, 1, 0, 1, 5, 7, 9, 3, 4, 7, 0, 0, 0, 9, 8, 9];

export const deleteDuplicateElements = (arr) => {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    let noCoincidences = 0;

    for (let j = 0; j < arr.length; j++) {
      const compareElement = arr[j];

      // Se agregar el elemento actual al array y se eliminan los duplicados
      if (currentElement === compareElement && noCoincidences < 1) {
        filteredArr.push(currentElement);
        noCoincidences++;
      } else if (currentElement !== compareElement) {
        // Se agregan los elementos diferentes al actual
        filteredArr.push(compareElement);
      }
    }

    noCoincidences = 0;
    arr = filteredArr; //Se sustituye el arr original por el filtrado
    filteredArr = [];
  }

  return arr.sort();
};
console.log(deleteDuplicateElements(numberArr));
console.log(deleteDuplicateElements(stringArr));

