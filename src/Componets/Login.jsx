import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
    try
    {
      console.log(data);
      const respones = await fetch("https://localhost:7203/api/users/register",{
        method : "POST",
        headers : {"content-Type" : "application/json",},
        body : JSON.stringify(data),
      });

      

      if(respones.ok)
      {
        const result = await respones.json();
        console.log("sucess", result);
      }
      else
      {
        const errorResult = await respones.json();
        console.log("error", errorResult);
      }
    }
    catch(err)
    {
      
      console.error("Network error",err);
    }
    //console.log("Form Submitted:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E1DFEA]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-[#0C270C] mb-6">Register to Movie Kona</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("userName")}
              className="w-full px-4 py-2 bg-[#BEE8D5] rounded-xl"
            />
            <p className="text-red-500 text-sm">{errors.userName?.message}</p>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("userEmail")}
              className="w-full px-4 py-2 bg-[#BEE8D5] rounded-xl"
            />
            <p className="text-red-500 text-sm">{errors.userEmail?.message}</p>
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full px-4 py-2 bg-[#BEE8D5] rounded-xl"
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0C270C] hover:bg-[#7AB41D] text-white py-2 rounded-xl"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
