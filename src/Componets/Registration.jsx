import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "@fontsource/poppins"

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
        className="w-full max-w-sm p-6 bg-[#0C270C] rounded-md shadow-md"
      >
        
            <h2 style={{fontFamily : 'Poppins, sans-serif'}} className='text-2xl font-bold text-white relative left-24'>Movie</h2>
            <p style={{fontFamily : 'Poppins, sans-serif'}} className='text-[20px] text-[#7AB41D] relative left-[148px] bottom-4 font-bold'>Kona</p>
        
        <div className='mb-4 ml-16'>
          <label style={{fontFamily : 'Poppins, sans-serif'}}  className='block text-white'>User Name</label>
          <input
           {...register('userName')}
           style={{fontFamily : 'Poppins, sans-serif'}} 
           className='w-48 h-6 bg-white rounded-md px-2 text-[10px]'  
          type='text'
          placeholder='Enter you user name'>
          </input>
          {errors.userName && (<p className='text-[#ffd700] text-[10px] mt-0.5'>{errors.userName.message}</p>)}
        </div>

        <div className='mb-4 ml-16'>
          <label style={{fontFamily : 'Poppins, sans-serif'}}  className='block text-white'>User Email</label>
          <input 
          {...register('userEmail')}
          style={{fontFamily : 'Poppins, sans-serif'}}
          className='w-48 h-6 bg-white rounded-md px-2 text-[10px]' 
          type='text'
          placeholder='Enter your Email'>
          </input>
          {errors.userEmail && (<p className='text-[#ffd700] text-[10px] mt-0.5'>{errors.userEmail.message}</p>)}
        </div>

        <div className='mb-4 ml-16'>
          <label style={{fontFamily : 'Poppins, sans-serif'}}  className='block text-white'>Password</label>
          <input 
           {...register('password')}
           style={{fontFamily : 'Poppins, sans-serif'}} 
           className='w-48 h-6 bg-white rounded-md px-2 text-[10px]' 
          type='text'
          placeholder='Enter you Password'>
          </input>
          {errors.password && (<p className='text-[#ffd700] text-[10px] mt-0.5'>{errors.password.message}</p>)}
        </div>

        <div className='mt-6 ml-16'>
          <button
          type='submit'
          style={{fontFamily : 'Poppins, sans-serif'}} 
          className='w-48 h-7 bg-[#7AB41D] rounded-md text-sm text-white font-bold hover:text-[#0C270C]'>
            Register
          </button>
        </div>
      
        
      </form>
    </div>
  );
}

export default Login;
