import React from "react";
import "./form-input.style.scss";

const FormInput = (props) => (
  <div className="group">
    <input {...props} className="form-input" />
    {props.label ? (
      <label className={`${props.value.length ? "shrink" : ""} form-input-label`}>
        {props.label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
