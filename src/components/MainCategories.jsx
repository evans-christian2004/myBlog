import React from 'react'
import { Link } from 'react-router-dom'

const MainCategories = () => {
  return (
    <div className='max-w-screen-xl hidden md:flex  bg-cpSecondaryLight rounded-3xl lg:rounded-full p-4 shadow-lg items-center justify-center gap-8 m-auto'>
        {/* links */}
        <div className="flex-1 flex items-center gap-1 justify-between flex-wrap">
            <Link to="/posts" className='bg-cpAccent text-white rounded-full px-4 py-2'>All Posts</Link>
            <Link to="/posts?cat=web-design" className='rounded-full px-4 py-2 hover:bg-cpSecondary transition-all ease-in'>
                Web Design
            </Link>
            <Link to="/posts?cat=databases" className='rounded-full px-4 py-2 hover:bg-cpSecondary transition-all ease-in'>
                Databases
            </Link>
            <Link to="/posts?cat=Information-Technology" className='rounded-full px-4 py-2 hover:bg-cpSecondary transition-all ease-in'>
                Information Technology
            </Link>
            <Link to="/posts?cat=Networking" className='rounded-full px-4 py-2 hover:bg-cpSecondary transition-all ease-in'>
                Networking
            </Link>
            
        </div>
        {/* search*/}
        <span className='text-xl'>|</span>
        <div className=" bg-white rounded-full flex items-center gap-1 pl-1 pr-1">
            <img src="search.svg" className='h-10' alt="" srcset="" />
            <input type="text" placeholder='looking for something?' className='bg-transparent'/>
        </div>
    </div>
  )
}

export default MainCategories