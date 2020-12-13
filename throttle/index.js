// when scroll down event is needed,
// don't need to call the callback function for every scroll down

function throttled(fn, delay) {
  let lastCall = 0;
  return function() {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn.apply(this, arguments);
  };
}

function sayHello() {
  console.log("My name is: ", new Date().toLocaleTimeString());
}

const speak = throttled(sayHello, 5000)

speak();
speak();

