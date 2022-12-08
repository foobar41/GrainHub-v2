function Validation(values) {
    let errors = {}
    let valid = false
    if(!values.food){
        errors.food="This field is required"
    }

    if (!values.product){
        errors.product="Product is required"
    }

    if(!values.quantity){
        errors.quantity="Quantity must be specified"
    }
    else if(isNaN(values.quantity)) {
        errors.quantity="Quantity must be a number only"
    }

    if (Object.keys(errors).length === 0) valid=true
    return [errors, valid];
}

export default Validation