//grab elements
const form = document.querySelector(".form-group")
const inputs = document.querySelectorAll(".field input")
const errorIcon = document.querySelectorAll(".field img")
const email = document.querySelector(".form-group .email input")

//add event when submit form and trigger function for empty input
form.addEventListener("submit", (e) => {
    e.preventDefault()
    inputs.forEach((input) => {
        if (input.value === "") {
            input.parentElement.classList.add("active")
        } else {
            input.parentElement.classList.remove("active")
        }
    })
    
    //add function for validating email
    let emailFormat = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    if (email.value.match(emailFormat)) {
        email.parentElement.classList.remove("active")
    } else {
        email.parentElement.classList.add("active")
    }
})