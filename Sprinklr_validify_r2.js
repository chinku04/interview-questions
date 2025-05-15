function string() {
    // TODO: Implement this
    // const usernameValidator = string()
    //   .min(3, { message: 'Username must be at least 3 characters' })
    //   .max(20, { message: 'Username must not have more than 20 characters' });
    const rule = [];
    const validator = {
      min(length, options = {}) {
        rule.push({
          type: 'min',
          length,
          message: options.message,
        });
        return this;
      },
      max(length, options = {}) {
        rule.push({
          type: 'max',
          length,
          message: options.message,
        });
        return this;
      },
      validate(value) {
        // iterate over rule and
        for (const rul of rule) {
          if (rul.type === 'min' && value.length < rul.length) {
            return rul.message;
          }
          if (rul.type === 'max' && value.length > rul.length) {
            return rul.message;
          }
        }
      },
    };
    return validator;
  }
  
  function number() {
    // TODO: Implement this
  }
  
  function object(schema) {
    // object({
    // username: usernameValidator,
    // TODO: Implement this
  
    return {
      validate(data) {
        for (const keys in schema) {
          console.log('keys', schema[keys], data);
          const error = schema[keys].validate(data);
          console.log(error);
          return error;
        }
      },
    };
  }
  function validate(data, validator) {
    // validate(username, userValidator);
    const res = validator.validate(data);
    // TODO: Implement this
    return {
      res,
    };
  }
  
  function array() {
    // TODO: Implement this
  }
  
  function refine(validator, refinement) {
    // TODO: Implement this
  }
  
  
  export { string, number, object, array, refine, validate };
  