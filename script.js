const btnConfirm = document.querySelector(".confirmar-btn");
const formFields = document.querySelectorAll(".info");

formFields.forEach((item) => {
  item.addEventListener("input", () => {
    item.nextElementSibling.style.visibility = "hidden"
    item.style.border = "2px solid green"; 
  });
});

formFields.forEach((item) => {
  item.addEventListener("input", () => {
    if(item.value.length === 0) {
      item.nextElementSibling.style.visibility = "visible"
      item.style.border = "2px solid red"; 
  }}
  )
})

btnConfirm.addEventListener("click", () => {
  formFields.forEach((item) => {
    if (item.value === '') {
      item.nextElementSibling.style.visibility = "visible"
      item.style.border = "2px solid red"; 
    }
  });
});


