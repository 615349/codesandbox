/* use two stacks to implement a queue
 * when push, always push to s1
 * when pop, always pop from s2
 * if s2 is empty, pop everything from s1
 */

const stack1 = [];
const stack2 = [];

const enqueue = element => {
  stack1.push(element);
};

const dequeue = () => {
  if (stack2.length === 0 && stack1.length === 0) {
    throw new Error("nothing to pop");
  }

  if (stack2.length === 0) {
    while (stack1.length > 0) {
      const element = stack1.pop();
      stack2.push(element);
    }
  }

  return stack2.pop();
};

enqueue("a");
enqueue("b");
enqueue("c");
document.getElementById("app").innerHTML = dequeue();

