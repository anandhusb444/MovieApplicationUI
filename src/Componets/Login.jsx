import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation schema
const schema = yup.object().shape({
  userName: yup.string().required("Enter your name"),
  userEmail: yup.string().email("Invalid email").required("Enter your email"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Enter your password"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await fetch("https://localhost:7203/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success", result);
      } else {
        const errorResult = await response.json();
        console.log("Error", errorResult);
      }
    } catch (err) {
      console.error("Network error", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm p-6 bg-white rounded-b-sm shadow-md"
      >
        <div>
            <h2>Register</h2><br/>
            <p>please enter your detiles</p>
        </div>

       

        <div>
          <label className='block'>User Name</label>
          <input
          type='text'
          placeholder='Enter you user name'>
          </input>
        </div>

        <div>
          <label className='block'>User Email</label>
          <input
          type='text'
          placeholder='Enter your Email'>
          </input>
        </div>

        <div >
          <label className='block'>Password</label>
          <input
          type='text'
          placeholder='Enter you Password'>
          </input>
        </div>
      
        

        

    

      
      </form>
    </div>
  );
}

export default Login;
