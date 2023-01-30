
const btn = document.querySelector(".confirmar-btn");


const infos = document.querySelectorAll(".info");

const data = document.querySelectorAll(".info");



infos.forEach(element => {
    element.addEventListener('keypress', () => {
        element.classList.add('info-success');
    })
});


btn.addEventListener('click', () => {
    
    
    const sds = document.querySelectorAll(".info");
    sds.forEach((number, index) => {
            if(!number.value) {
                number.classList.add('info-danger');
                displayAlert()
            }
    });
    
})

function displayAlert() {
    document.getElementById("warning").style.display = "block"

}








