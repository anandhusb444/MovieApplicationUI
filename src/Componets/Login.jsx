import React from 'react';

function Login() {


  return (
    <>
      <div className='mainDiv flex  items-center justify-center h-screen bg-[#E1DFEA]'>
        <div className='childDiv  w-full max-w-170 h-100 flex items-center justify-center  rounded-2xl bg-[#0C270C]'>
          <div className='child1Div w-[450px] h-100 rounded-2xl bg-white relative left-[220px]'>

          </div>

          <div className='InnerLoginDv  w-44 h-24 relative right-[450px] bottom-32'>
            <p className='relative left-7 text-white font-light'>Welcome to the</p> <br/> <p className='relative bottom-6 font-semibold left-10 text-white'>Movie Kona </p> <br/>
            <p className='relative bottom-12 left-4 text-white font-light font-sans'>We Made it for you</p>

            <button className='border border-white w-28 h-9 rounded-4xl text-white relative hover:border-[#7AB41D] top-44 left-8'>LOGIN</button>
            
            <div className='w-96 h-80 relative left-64 bottom-44'>
              <p className='font-extrabold text-[#0C270C] relative left-24 top-8'>Sign Up to Movie Kona </p>
              <p className='relative top-24 left-7.5 '>Name</p>
              <input className='w-40 h-7 relative top-24 left-6 bg-[#BEE8D5] rounded-3xl'></input>
              <p className='absolute top-30 left-53'>UserName</p>
              <input className='w-40 h-7 relative top-24 left-11  bg-[#BEE8D5] rounded-3xl'></input>
              <p className='absolute top-43 left-8'>Email</p>
              <input className='w-86 h-7 relative top-30 left-6  bg-[#BEE8D5] rounded-3xl'></input>
              <p className='absolute top-56 left-8'>password</p>
              <input className='w-86 h-7 relative top-36 left-6  bg-[#BEE8D5] rounded-3xl'></input>
              <input type='checkbox' className='relative top-50 right-78'></input>
              <span className='relative font-light top-43 left-14'>Creating an account your ok with the terms and contintion<br/> that i mention,service privacy policy</span>


            </div>

          </div>


          
        </div>
      </div> 
    </>
  );
}

export default Login;
