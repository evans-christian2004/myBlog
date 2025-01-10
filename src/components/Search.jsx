import React from 'react'

const Search = () => {
  return (
    <div className='bg-white p-2 rounded-full flex items-center gap-2 border-solid border-4 border-cpPrimaryLight'>
        <img src="search.svg" className='h-7' alt="" srcset="" />
        <input type="text" placeholder='Search...' className='bg-transparent'/>
    </div>
  )
}

export default Search