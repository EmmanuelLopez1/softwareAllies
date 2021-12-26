

/**
 * *  Write a Java method to check whether a string is a valid password.
 * *Password rules:
 * *A password must have at least ten characters.
 * *A password consists of only letters and digits.
 * *A password must contain at least two digits.
 * ?
 */

 const password1 = "MypasswordBaby12";
 const password2 = "Mypass11";
 const password3 = "MypasswordBaby1";


 
 const verifyPassword = (password) => {
   const regexDigitsAndCharacters = /^[a-z\d]+$/i; 
   const regexOnlyDigits = /\d/;
   let validPassword = false;
 
   if (password.length < 10) { 
     return { message: "Password must be at least 10 characters" };
   } else if (regexDigitsAndCharacters.test(password)) {
     let cantDigitsInPassword = 0; //CANT OF DIGITS IN THE PASSWORD
     for (const i of password) {
       if (regexOnlyDigits.test(i)) { // VERIFY IF ONE DIGIT INT THE PASSWORD IS A DIGIT
         cantDigitsInPassword++;
         if (cantDigitsInPassword >= 2) { // VERIFY IF THERE ARE 2 OR MORE DIGITS IN THE PASSWORD
           validPassword = true;
         }
       }
     }
   }
 
   if (!validPassword) {
     return {
       mesage:
         "Invalid password, must only have characters and digits, at least 2 digits",
     };
   } else {
     return { mesage: "Correct password" };
   }
 };
 
 console.log(verifyPassword(password1))
 console.log(verifyPassword(password2))
 console.log(verifyPassword(password3))
