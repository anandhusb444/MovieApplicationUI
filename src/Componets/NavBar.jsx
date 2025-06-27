import React from 'react'

export default function NavBar1() {
  return (
    <div>
      <nav className='flex justify-around items-center w-screen h-20 bg-[#0C270C]' >
        <div className='flex justify-around align-middle '>
            <p className='text-white font-mono'>Movie</p>
            <p className='text-[#7AB41D] font-mono relative top-3 right-4'>Kona</p>

          <input
              type='text'
              placeholder='Search'
              className='rounded-lg  border-white text-black px-2 bg-white w-50 h-7 ml-24 '>
          </input>
        </div>

        <div className='flex justify-around items-center text-white gap-3.5 font-mono relative left-18'>
            <a className='hover:-translate-y-1 hover:text-[#ffd700] transition-transform duration-300'>About</a>
            <a className='hover:-translate-y-1 hover:text-[#ffd700] transition-transform duration-300'>Teams</a>
            <a className='hover:-translate-y-1 hover:text-[#ffd700] transition-transform duration-300'>Fanart</a>
            <a className='hover:-translate-y-1 hover:text-[#ffd700] transition-transform duration-300'>News</a>
        </div>

        <div className='flex justify-around items-center text-white gap-3.5 font-mono'>
            <button className='text-[#7AB41D] bg-white w-23 h-8 rounded-2xl'>Profile</button>
            <button className='bg-[#7AB41D] w-23 h-8 rounded-2xl'>LOGIN</button>
        </div>

      </nav>
    </div>
  )
}
