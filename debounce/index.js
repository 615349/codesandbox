const debounce = (fn, wait) => {
  let timer;
  return function() {
    console.log("timer:", timer);
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), wait);
  };
};

function sayHello() {
  console.log("My name is", this.name, new Date().toLocaleTimeString());
}

const person = {
  name: "john",
  speak: debounce(sayHello, 5000)
};

person.speak();
person.speak();

