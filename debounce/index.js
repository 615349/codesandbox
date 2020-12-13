const debounce = (fn, wait) => {
  let timer;
  // must return function to utilise arguments
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), wait);
  };
};

function sayHello() {
  console.log("time is", new Date().toLocaleTimeString());
}

const speak = debounce(sayHello, 3000)

speak();
speak();

