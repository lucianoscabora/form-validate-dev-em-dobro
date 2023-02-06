const btn = document.querySelector(".confirmar-btn");
const infos = document.querySelectorAll(".info");
const wrng = document.querySelectorAll('.warning');

infos.forEach((element) => {
  element.addEventListener("keypress", () => {
    element.classList.add("info-success");
   removeAlert();
  });
});

btn.addEventListener("click", () => {
  infos.forEach((item, index) => {
    if (!item.value) {
      item.classList.add("info-danger");
      displayAlert();
    }
  });
});

function displayAlert() {
  wrng.forEach((item) => {
    item.classList.add("warning-show");
  });
}

function removeAlert() {
  wrng.forEach((item) => {
    item.classList.remove("warning-show");
  });
}
