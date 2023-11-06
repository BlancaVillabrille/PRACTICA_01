
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function() {
  const checkbox = document.getElementById("termsCheckbox");
  const emailInput = document.getElementById("emailInput").value;

  if (!checkbox.checked) {
    alert("Parece que nos falto algo..");
  } else if (emailInput === "") {
    alert("Parece que nos falto algo..");
  } else {
    alert("Felicidades, pronto escucharás de nosotros");
  }
});