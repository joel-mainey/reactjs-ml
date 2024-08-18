import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
          <a href="/"><h1 className='font-medium text-gray-800'>Free<span className='text-gray-400 bold'>Scribe</span></h1></a>
          <div className='gap-4 flex items-center'>
            <a href="/" className='flex items-center gap-2 specialBtn text-sm px-3 py-2 rounded-lg text-gray-800'>
              <p>New</p>
              <i className="fa-solid fa-plus"></i>
            </a>
          </div>
        </header>
  )
}
