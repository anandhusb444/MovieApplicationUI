import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav style={{backgroundColor: '#0C270C'}} className='w-600 h-18' >
        <div className='flex p-5 '>
        <div className='text-white'>
            Movie Kona
        </div>
        <div>
            <input type='text'
            placeholder='Search'
            className='rounded-lg border
             border-gray-600
              bg-white
              text-white 
              focus:outline-none 
              focus:ring-2 focus:ring-blue-500"'
            >
            </input>
        </div>
        <div className='text-white'>
            Movies
        </div>
        <div className='text-white'>
            TV Show
        </div>
        <div className='text-white'>
            Fans Show
        </div>
        <div>
            <button className='bg-white rounded-lg border text-[#7AB41D]' >
                USER LOGIN
            </button>
        </div>
        <div>
            <button className='bg-[#7AB41D] rounded-lg border text-white'>
                Watch List
            </button>
        </div>
            
        </div>
       
      </nav>
    </div>
  )
}

export default NavBar
