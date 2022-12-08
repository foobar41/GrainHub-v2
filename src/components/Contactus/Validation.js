import validator from 'validator'
function Validation(values) {
    let errors = {}
    let valid = false
    if(!values.name){
        errors.name="name is required"
    }

    if (!values.email){
        errors.email="email is required"
    }
    else if (!validator.isEmail(values.email)){
        errors.email="enter valid email address"
    }
    
    if (!values.message){
        errors.message="please enter message"
    }

    if (Object.keys(errors).length === 0) valid=true
    return [errors, valid];
}

export default Validation
