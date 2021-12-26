/**
 * * Write a Java program that swap two numbers without using a third variable
 * ? PROBADO CON JEST
 */

// WITHOUT JEST
let a = -5;
let b = 8;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);

// THESE MUST BE RUN WITH JEST
test("SWAP NUMBERS", () => {
  let a = -5;
  let b = 8;

  //SAVING ORIGINAL VALUES
  const originalA = a;
  const originalB = b;

  //PROCESS TO SWAP THE VALUES
  a = a + b;
  b = a - b;
  a = a - b;

  // SHOW ORIGINAL VALUES AND SWAPPED VALUES
  //   console.log("ORIGINAL VALUES");
  //   console.log("A: " + originalA);
  //   console.log("B: " + originalB);

  //   console.log("SWAP VALUES");
  //   console.log("A: " + a);
  //   console.log("B: " + b);

  //   TEST
  expect(a).toBe(originalB);
  expect(b).toBe(originalA);
});

