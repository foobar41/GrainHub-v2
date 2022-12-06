import validator from 'validator'
function Validation(values) {
    let errors = {}
    let valid = false
    
    if (!values.fullname) {
        errors.fullname = "name is required"
    }

    if (!values.email) {
        errors.email = "email is required"
    }
    else if (!validator.isEmail(values.email)) {
        errors.email = "enter valid email address"
    }

    if (!values.password) {
        errors.password = "password is required"
    }
    else if (values.password.length < 8) {
        errors.password = 'password must be more than 8 characters'
    }

    if (!values.confirm_password) {
        errors.confirm_password = "enter the confirm password"
    }

    else if (values.password.localeCompare(values.confirm_password) !== 0) {
        errors.confirm_password = "confirm password is not matched"
    }
    
    if (Object.keys(errors).length === 0) valid=true
    return [errors, valid];
}

export default Validation
