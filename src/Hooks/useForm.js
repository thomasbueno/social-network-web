import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    message: "Preencha um email válido",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  const validation = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) validation(target.value);
    setValue(target.value);
  };
  return {
    value,
    setValue,
    onChange,
    error,
    validation: () => validation(value),
    onBlur: () => validation(value),
  };
};

export default useForm;
