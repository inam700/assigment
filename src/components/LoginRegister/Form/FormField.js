import React from "react";

const InputField = ({ inputdata, id, change }) => {
  const Errors = () => {
    let errorMessage = null;
    if (inputdata.validate && !inputdata.valid) {
      errorMessage = <div className="error">{inputdata.validationMessage}</div>;
    }
    return errorMessage;
  };
  const fieldTemplate = () => {
    let inputTemplate = null;
    switch (inputdata.element) {
      case "input":
        inputTemplate = (
          <div>
            <input
              {...inputdata.inputConfig}
              value={inputdata.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
            />
            {Errors()}
          </div>
        );
        break;
      default:
        inputTemplate = null;
    }
    return inputTemplate;
  };
  return <div>{fieldTemplate()}</div>;
};
export default InputField;
