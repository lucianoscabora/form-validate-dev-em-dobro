const btn = document.querySelector(".confirmar-btn");
const infos = document.querySelectorAll(".info");
const wrng = document.querySelectorAll('.warning');
const tests = document.getElementById("info");


infos.forEach((element) => {
  element.addEventListener("keypress", () => {
    element.classList.add("info-success");
    toggleHidden();
  });
});

btn.addEventListener("click", () => {
  infos.forEach((item, index) => {
    if (item.value === '') {
      item.parentElement.classList.add("info-danger");
      toggleVis();
    }
  });
});


function toggleVis() {
  const wrng1 = document.querySelectorAll(".warning")
    wrng1.forEach((item, index) => {
    item.style.visibility = "visible";
  })
  
}

function toggleHidden() {
  const wrng1 = document.querySelectorAll(".warning")
  wrng1.forEach((item) => {
    item.style.visibility = "hidden";
  });
}