import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-5 px-20 z-[100] w-full absolute'>
        <div className='flex items-center'>
            <img className='w-14 py-2 px-2 sm:w-20' src='./images/logo-mosqueku.png' alt="logomosqueku" />
            <h1 className='text-sm font-bold cursor-pointer sm:text-3xl'>MosqueKu</h1>
        </div>
        <div>
        <button className='pr-2'>Masuk</button>
        <button className='px-6 border border-black rounded py-2'>Daftar</button>
        </div>
    </div>
  )
}

export default Navbar