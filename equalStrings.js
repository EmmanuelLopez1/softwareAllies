/*
 * Write a Java program to check whether two String objects contain the same data.
 */

const equalStrings = (strA, strB) => {
  if (typeof strA === "string" && typeof strB === "string") {

    if (strA === strB) {
      return { message: "The strings are equal", value: true };
    }

    return { message: "The strings are not equal", value: false };
  }

  return { message: "The values entered are not strings" }
};

console.log(equalStrings("hello world", "hello world"));
console.log(equalStrings("hello world", "hello World"));
console.log(equalStrings(1, 2));
