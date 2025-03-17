import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav style={{backgroundColor: '#0C270C'}} className='h-18' >
        <div className='flex p-4'>
        <div className='text-white relative left-7 font-mono  '>Movie</div>
        <div className='relative top-4 left-3 text-[#7AB41D] font-mono'>Kona</div>
        <div className='relative left-20 top-0.5'>
            <input type='text'
            placeholder='Search'
            className='rounded-lg border
              h-8
              w-63
             border-gray-600
              bg-white
              text-white 
              focus:outline-none 
              focus:ring-2 focus:ring-blue-500"'
              
            >
            </input>
        </div>
        <div className='text-white relative left-90 p-2 text-sm font-mono'>
            About
        </div>
        <div className='text-white relative left-90 p-2 text-sm font-mono'>
            Teams
        </div>
        <div className='text-white relative left-90 p-2 text-sm font-mono'>
          Fanart
        </div>
        <div className='text-white relative left-90 p-2 hover:-translate-y-1 transition-transform duration-300'>
          <span className='font-mono text-sm '>
              News
          </span>

        </div>
        <div className='relative left-100 p-0.5'>
            <button className='bg-white rounded-4xl border text-[#7AB41D] w-28 h-9 font-light' >
              <span className="text-[#7AB41D] hover:text-[#0C270C] transition-colors duration-200 font-mono">
                USER LOGIN
              </span>
            </button>
        </div>
        <div className='relative left-105 p-0.5'>
            <button className='bg-[#7AB41D] rounded-4xl  text-white w-23 h-9 font-light font-mono'>
                LOGO
            </button>
        </div>
            
        </div>
       
      </nav>
    </div>
  )
}

export default NavBar
