const timeoutPromise = () => new Promise((_, reject) => reject("one"));

const fetchCard = () =>
  timeoutPromise()
    .then(response => {
      console.log("response1:", response);
      if (!response.ok) throw new Error("[fetchCard] Response not ok.");
      return response.json();
    })
    .then(response => {
      console.log("response2:", response);
    })
    .catch(error => {
      console.log("catch:", error);
    });

fetchCard();

