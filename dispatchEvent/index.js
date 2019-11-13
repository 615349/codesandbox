window.addEventListener("hello", function(event) {
  console.log(event.detail.name);
});

window.dispatchEvent(
  new CustomEvent("hello", {
    detail: { name: "John" }
  })
);

