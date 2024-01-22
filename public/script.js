let x = document.querySelector(".btn");

x.addEventListener("click", () => {
  let usName = document.querySelector(".usName").value;
  let usAge = document.querySelector(".usAge").value;
  let usEmail = document.querySelector(".usEmail").value;
  fetch("http://localhost:7777/addName", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: usName, age: usAge,email:usEmail }),
  });
});
