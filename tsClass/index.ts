class Person {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + " " + lastName;
  }
}

const user = new Person("Steve", "Harrison");
// if there is no public, user.firstName would be undefined
console.log(user.firstName);
console.log(user.fullName);
