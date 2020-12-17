export const validate = (element, inputdata = []) => {
    let error = [true, ""];
  
    if (element.validate.email) {
      const valid = /\S+@\S+\.\S+/.test(element.value);
      const message = `${!valid ? "Must be a valid email" : ""}`;
      error = !valid ? [valid, message] : error;
    }
  
    if (element.validate.required) {
      const valid = element.value.trim() !== "";
      const message = `${!valid ? "This field is required" : ""}`;
      error = !valid ? [valid, message] : error;
    }
    if (element.validate.confirm) {
      const valid =
        element.value.trim() === inputdata[element.validate.confirm].value;
      const message = `${!valid ? "Passwords do not match" : ""}`;
      error = !valid ? [valid, message] : error;
    }
  
    return error;
  };
  export const update = (element, inputdata) => {
    const newInputData = {
      ...inputdata,
    };
    const newElement = {
      ...newInputData[element.id],
    };
    newElement.value = element.event.target.value;
    if (element.blur) {
      let validData = validate(newElement, inputdata);
      newElement.valid = validData[0];
      newElement.validationMessage = validData[1];
    }
    newElement.checked = element.blur;
    newInputData[element.id] = newElement;
  
    return newInputData;
  };
  
  export const generateData = (inputdata) => {
    let dataToSubmit = {};
    for (let key in inputdata) {
      dataToSubmit[key] = inputdata[key].value;
    }
    return dataToSubmit;
  };
  export const isFormValid = (inputdata) => {
    let formIsValid = true;
    for (let key in inputdata) {
      formIsValid = inputdata[key].valid && formIsValid;
    }
    return formIsValid;
  };
  