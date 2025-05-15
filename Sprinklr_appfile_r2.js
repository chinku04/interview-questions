import React, { useState } from 'react';
import { string, number, object, validate } from './validify_r2';
import { TextInput } from './TextInput';

const UPPER_CASE_CHAR_REGEX = /(?=.*?[A-Z])/;
const LOWER_CASE_CHAR_REGEX = /(?=.*?[a-z])/;
const SPECIAL_CHAR_REGEX = /(?=.*?[#?!@$%^&*-])/;
const NUMBER_REGEX = /(?=.*?[0-9])/;

const ZIP_CODE_REGEX = /^\d+$/;
// kuljeet keshav
// https://stackblitz.com/edit/vitejs-vite-2n5iropa?file=validify%2Fsrc%2FApp.js,validify%2Fsrc%2Fvalidify.js,validify%2Fwebpack.config.js
// TODO: Use below validation schema
const usernameValidator = string()
  .min(3, { message: 'Username must be at least 3 characters' })
  .max(20, { message: 'Username must not have more than 20 characters' });

// const passwordValidator = string()
//   .min(8, { message: 'Password must contain at least eight characters' })
//   .pattern(UPPER_CASE_CHAR_REGEX, {
//     message: 'Password must contain at least one uppercase letter',
//   })
//   .pattern(LOWER_CASE_CHAR_REGEX, {
//     message: 'Password must contain at least one lowercase letter',
//   })
//   .pattern(SPECIAL_CHAR_REGEX, {
//     message: 'Password must contain at least one special character',
//   })
//   .pattern(NUMBER_REGEX, {
//     message: `Password must contain at least one number.`,
//   });

// const ageValidator = number().min(18, {
//   message: 'You must be at least 18 years old to register',
// });

// const addressValidator = object({
//   streetName: string().required({ message: 'Street Name is required' }),
//   state: string().required({ message: 'State is required' }),
//   zipCode: string()
//     .length(5, { message: 'Zip Code has to be of 5 digits' })
//     .pattern(ZIP_CODE_REGEX, { message: 'Zip Code must contain only numbers' }),
// });

const userValidator = object({
  username: usernameValidator,
  // password: passwordValidator,
  // age: ageValidator,
  // address: addressValidator,
});

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Validate user data

    const formData = new FormData(e.target);
    console.log(username);
    validate(username, userValidator);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 px-2 max-w-xl">
      <h2 className="text-xl font-bold">Registration Form</h2>

      <TextInput
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        // error={errors.username}
      />

      <TextInput label="Password" type="password" />

      <TextInput label="Age" type="number" />

      <h3 className="text-lg font-semibold">Address:</h3>
      <TextInput label="Street Name" type="text" />

      <TextInput label="State" type="text" />

      <TextInput label="Zip Code" type="text" />

      <button
        type="submit"
        className="p-2 border rounded-md self-center hover:bg-gray-100"
      >
        Submit
      </button>
    </form>
  );
}

function App() {
  return <RegistrationForm />;
}

export default App;
