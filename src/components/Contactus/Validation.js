import validator from 'validator'
function Validation(values) {
    let errors={}
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

  return errors;
}

export default Validation
