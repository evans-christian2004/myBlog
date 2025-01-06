import React from 'react'
import { Link } from 'react-router-dom'

const MainCategories = () => {
  return (
    <div className='hidden md:flex  bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
        {/* links */}
        <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to="/posts" className='bg-c text-white rounded-full px-4 py-2'>All Posts</Link>
        </div>
        {/* search */}
        <div className="">Search</div>
    </div>
  )
}

export default MainCategories