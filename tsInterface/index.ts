interface User {
  firstName: string;
  lastName: string;
}

const greeting = (user: User) => `hello ${user.firstName} ${user.lastName}`;

document.getElementById("app").innerHTML = greeting({
  firstName: "Steve",
  lastName: "Harrison"
});

