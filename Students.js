/**
 * *  Write a Java program that generates two Student object
 * *  (Private attributes: First Name, Last Name, Age, BirthDate)
 * *  and compare to see if their attributes are equal.
 * ?
 */

 class Student {
    constructor(FirstName, Lastname, Age, Birthdate) {
      const firstname = FirstName;
      const lastname = Lastname;
      const age = Age;
      const birthdate = Birthdate;
      this.getAtributes = () => {
        return {
          firstname,
          lastname,
          age,
          birthdate,
        };
      };
    }
  }
  
  const student1 = new Student("Maxo", "Gaucho", 22, 1999);
  const student2 = new Student("Maxo", "Gaucho", 23, 1999);
  const student3 = new Student("Andres", "Lopez", 21, 1998)
  
  const compareAttributesObject = (object1, object2) => {
    const cantAttributes = Object.keys(object1.getAtributes()).length;
    object1 = object1.getAtributes();
    object2 = object2.getAtributes();
  
    const object1Keys = Object.keys(object1);
    const object2Keys = Object.keys(object2);
  
    let attrEquals = 0;
    const attributeEquals = [];
  
    for (let i = 0; i < cantAttributes; i++) {
      if (object1[object1Keys[i]] === object2[object2Keys[i]]) {
        attrEquals++;
        attributeEquals.push(object1Keys[i]);
      }
    }
  
    if (attrEquals === cantAttributes) {
      return { mesage: "All attributes in both objects are equal" };
    } else if (attrEquals === 0) {
      return { mesage: "All attributes in both objects are diferent" };
    } else {
      return {
        mesage: "These atributes in both objects are equal",
        attributeEquals,
      };
    }
  };
  
  console.log(compareAttributesObject(student1, student2));
  console.log(compareAttributesObject(student1, student1));
  console.log(compareAttributesObject(student1, student3));


  