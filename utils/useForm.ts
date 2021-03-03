import { useState, useEffect } from 'react';
import { stripPhone, formatPhone } from './phoneUtils';

export type FormProps = {
  [key: string]: {
    required?: boolean,
    validate?: 'email' | 'phone' | 'confirmEmail' | 'confirmPassword',
    defaultValue?: any
  }
}

export type Form = {
  values: Record<string, string>,
  onChange: (e: any) => void,
  validate: (valuesToEvaluate?: [string]) => boolean,
  errors: Record<string, boolean>,
  clearErrors: () => void
}

/**
 * Custom hook designed for easy form initialization and validation.
 * Returns the following:
 *  values = key-value pair of the names of every input in the form and their respective values.
 *  onChange = function for controlled inputs to call when their value changes.
 *  validate = function that updates the errors object and returns true if all inputs have been validated.
 *  errors = key-value pair of input names and a boolean corresponding to input validation.
 *
 * @param {object} config Object defining the names of the inputs in the form and their respective properties.
 */
const useForm = (config: FormProps): Form => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (config) {
      const initialState = {};
      const initialErrors = {};
      for (const [key, value] of Object.entries(config)) {
        initialState[key] = value.defaultValue || '';
        initialErrors[key] = false;
      }
      setValues(initialState);
      setErrors(initialErrors);
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...values };
    const newErrors = { ...errors };

    if (config[name].validate === 'phone') newValues[name] = formatPhone(value, (values as any).phone);
    else newValues[name] = value;

    newErrors[name] = false;

    setValues(newValues);
    setErrors(newErrors);
  };

  const validateValue = (key: string, value: any) => {
    const itemConfig = config[key];
    if (itemConfig?.required && !value) return false;

    switch (itemConfig?.validate) {
    case 'email': {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(value.toLowerCase());
    }
    case 'phone':
      return stripPhone(value).length === 12;
    case 'confirmEmail':
      return value === (values as any)?.email;
    case 'confirmPassword':
      return value === (values as any)?.password;
    default:
      return true;
    }
  };

  const setError = (key: string) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      newErrors[key] = true;
      return newErrors;
    });
  };

  const validate = (valuesToEvaluate = []) => {
    let validated = true;
    for (const [key, value] of Object.entries(values)) {
      if (!validateValue(key, value) && (valuesToEvaluate.length === 0 || valuesToEvaluate.includes(key))) {
        validated = false;
        setError(key);
      }
    }
    return validated;
  };

  const clearErrors = () => {
    for (const key of Object.keys(errors)) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        newErrors[key] = false;
        return newErrors;
      });
    }
  };

  return {
    values, onChange, validate, errors, clearErrors,
  };
};

export default useForm;
