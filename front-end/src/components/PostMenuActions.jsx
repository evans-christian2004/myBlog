import React from 'react'

const PostMenuActions = () => {
  return (
    <div>
        <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
            <img src="bookmark.svg" alt="" srcset="" />
            <span>Save this post!</span>
        </div>
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
            <img src="delete.svg" alt="" srcset="" />
            <span className='text-red-500'>Delete this post!</span>
        </div>
    </div>
  )
}

export default PostMenuActions