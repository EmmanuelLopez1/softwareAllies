/**
 * *  Given an array of non-empty strings, create and return a Map <String, String> as follows:
 * *  for each string add its first character as a key with its last character as the value.
 */

 const cadenasArr = [
    "good bye",
    "everybody go to the party",
    "cause im",
    "having",
    "a good",
    "time",
    "with you",
  ];
  
  const createDictionary = (arr) => {
    const dictionary = new Map();
  
    for (const str of arr) {
      const strLength = str.length;
      dictionary.set(str[0], str[strLength - 1]);
    }
    return dictionary;
  };
  console.log(createDictionary(cadenasArr))