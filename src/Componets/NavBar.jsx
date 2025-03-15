import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav style={{backgroundColor: '#0C270C'}} className='h-18' >
        <div className='flex p-4'>
        <div className='text-white relative left-7'>Movie</div>
        <div className='relative top-4 left-3 text-[#7AB41D]'>Kona</div>
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
        <div className='text-white relative left-90 p-2 text-sm'>
            About
        </div>
        <div className='text-white relative left-90 p-2 text-sm'>
            Teams
        </div>
        <div className='text-white relative left-90 p-2 text-sm'>
          Fanart
        </div>
        <div className='text-white relative left-90 p-2 text-sm'>
          News
        </div>
        <div className='relative left-100 p-0.5'>
            <button className='bg-white rounded-4xl border text-[#7AB41D] w-28 h-9 font-light' >
                USER LOGIN
            </button>
        </div>
        <div className='relative left-105 p-0.5'>
            <button className='bg-[#7AB41D] rounded-4xl  text-white w-23 h-9 font-light'>
                LOGO
            </button>
        </div>
            
        </div>
       
      </nav>
    </div>
  )
}

export default NavBar
