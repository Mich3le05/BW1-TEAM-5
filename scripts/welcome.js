const checkBox = document.getElementById("checkbox");
const button = document.getElementById("proceedBtn");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkBox.checked) {
    window.location.href = "benchmark.html";
  } else {
    alert("You must promise to answer without help.");
  }
});
