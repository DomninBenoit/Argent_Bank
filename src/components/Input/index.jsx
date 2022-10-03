import React from "react";

const Input = ({ label, type, name, classname }) => {
  return (
    <>
      {type !== "checkbox" ? (
        <div class={classname}>
          <label for={name}>{label}</label>
          <input type={type} id={name} />
        </div>
      ) : (
        <div class={classname}>
          <input type={type} id={name} />
          <label for={name}>{label}</label>
        </div>
      )}
    </>
  );
};

export default Input;
