const btnConfirm = document.querySelector(".confirmar-btn");
const formFields = document.querySelectorAll(".info");

formFields.forEach((item) => {
  item.addEventListener("keypress", () => {
    item.nextElementSibling.style.visibility = "hidden"
    item.style.border = "2px solid green"; 
  });
});

btnConfirm.addEventListener("click", () => {
  formFields.forEach((item) => {
    if (item.value === '') {
      item.nextElementSibling.style.visibility = "visible"
      item.style.border = "2px solid red"; 
    }
  });
});
