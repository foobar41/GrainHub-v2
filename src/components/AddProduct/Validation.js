function Validation(values) {
    let errors={}
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

  return errors;
}

export default Validation