import React from 'react'

export default function NavBar1() {
  return (
    <div>
      <nav className='flex justify-around items-center w-screen h-20 bg-[#0C270C]' >
        <div className='flex justify-around align-middle '>
            <img src='' alt='logo'/>
            <button>ser</button>
        </div>

        <div className='flex justify-around items-center'>
            <a>About</a>
            <a>Teams</a>
            <a>Fanart</a>
            <a>News</a>
        </div>

        <div>
            <button>USER LOGIN</button>
            <button>Register</button>
        </div>

      </nav>
    </div>
  )
}
