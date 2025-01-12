import React from 'react'
import PostsList from '../components/PostsList'
import PostsSideMenu from '../components/PostsSideMenu'
import { useState } from 'react'

const PostList = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=''>
      <h1 className='mb-8 text-2xl'>Developent Blog</h1>
      <button onClick={() => setOpen((prev) => !prev)} className='bg-cpAccent text-sm text-white px-4 py-2 mb-4 rounded-2xl md:hidden'>
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="">
          <PostsList/>
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <PostsSideMenu/>
          </div>
      </div>
    </div>
  )
}

export default PostList