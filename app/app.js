const inputEmail = document.querySelector('#email');
const form = document.querySelector("form");
const errorMsg = document.querySelector(".error-msg");
const emailPattern = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
let emailValue;


inputEmail.addEventListener("input", e => {
    if(e.target.value.length === 0) {
        errorMsg.classList.remove("hide");
        inputEmail.classList.add("error");
    } else {
        errorMsg.classList.add("hide");
        inputEmail.classList.remove("error");
        emailValue = e.target.value;
    }
});

form.addEventListener("submit", e => {
    e.preventDefault();

    if(emailPattern.test(emailValue)) {
        errorMsg.classList.add("hide");
        inputEmail.classList.remove("error");
    } else {
        errorMsg.classList.remove("hide");
        inputEmail.classList.add("error");
    }
})