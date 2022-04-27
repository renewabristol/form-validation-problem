import {useState} from 'react'

export const useForm = (options) => {
  const [data, setData] = useState((options?.initialValues || {}));
  const [errors, setErrors] = useState({});

  const handleChange = key => e => {
    console.log(e.target.value)
    console.log(key)
    const value = e.target.type === 'checkbox'
      ? e.target.checked 
      : e.target.value
    
    if (key === 'animals') {
      setData({
        ...data,
        animals: {
          ...data.animals,
          [e.target.value]:value
        }
      })
    } else {

      setData({
        ...data,
        [key]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(data)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit();
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  };
};