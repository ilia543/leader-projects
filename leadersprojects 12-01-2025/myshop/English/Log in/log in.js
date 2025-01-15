const form = document.getElementById("form")
const name_input = document.getElementById("name_input")
const email_input = document.getElementById("email_input")
const password_input = document.getElementById("password_input")
const error_message = document.getElementById('error-message')
form.addEventListener("sumbit", (e) => {
    let arrors = []

    if(name_input){
        errors = getSignupFormErrers(name_input.value, email_input.value, password_input.value,)
    }
    else{
        //niggeeeer
        errors = getLoginFormErrors(name_input.value, email_input.value, password_input.value,)
    }

    if(errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormErrers(name, email, password,){
    let errors = []

    if(name ==='' || name == null){
        errors.push('name is required')
        name_input.parentElement.classList.add('incorrect')
    }

    if(surname ==='' || surname == null){
        errors.push('surname is required')
        surname_input.parentElement.classList.add('incorrect')
    }

    if(email ==='' || email == null){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }

    if(phone ==='' || phone == null){
        errors.push('phone is required')
        phone_input.parentElement.classList.add('incorrect')
    }

    if(date ==='' || date == null){
        errors.push('date is required')
        date_input.parentElement.classList.add('incorrect')
    }

    if(password ==='' || password == null){
        errors.push('password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    if(repeatpassword ==='' || repeatpassword == null){
        errors.push('repeat_password is required')
        repeat_password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}