const container = document.querySelector("#container");

container.addEventListener("click", (e) => {
  if (e.target.id === "guess") {
    console.log("guess clicked");
  }
});
