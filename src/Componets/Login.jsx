import React from 'react';

function Login() {
  return (
    <>
      <div className='mainDiv flex border border-amber-400 items-center justify-center h-screen'>
        <div className='childDiv  w-full max-w-80 h-100 flex items-center justify-center border border-black'>
          <div className='textDiv border border-red-600 w-full h-16 relative bottom-36 p-1.5 items-center'>
            What's is your phone number or email?
          </div>
          <div className='loginLabel '>
            <label >

            </label>

          </div>
        </div>
      </div> 
    </>
  );
}

export default Login;
