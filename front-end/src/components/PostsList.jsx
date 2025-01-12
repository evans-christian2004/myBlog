import React from 'react'
import PostListItem from './PostListItem'

const PostsList = () => {
  return (
    <div>
        <div className="flex flex-col gap-12 mb-8">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </div>
    </div>
  )
}

export default PostsList