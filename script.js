
const btn = document.querySelector(".confirmar-btn");


const infos = document.querySelectorAll(".info");

const data = document.querySelectorAll(".info");



infos.forEach(element => {
    element.addEventListener('keypress', () => {
        element.classList.add('info-success');
        removeAlert()
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
    const war = document.querySelectorAll(".warning");

    war.forEach((number) => {
        number.classList.add('warning-show')
    })
}

function removeAlert() {
    const war = document.querySelectorAll(".warning");

    war.forEach((number) => {
        number.classList.remove('warning-show');
        number.classList.add('warning')
    })
}
















