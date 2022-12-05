import validator from 'validator'
function Validation(values) {
    let errors={}

    if (!values.email){
        errors.email="email is required"
    }
    else if (!validator.isEmail(values.email)){
        errors.email="enter valid email address"
    }

    if(!values.password){
        errors.password="password is required"
    }
    else if (values.password.length<8){
        errors.password='password must be more than 8 characters'
    }

  return errors;
}

export default Validation