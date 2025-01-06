import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
        {/* first post */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* image  */}
            <Image src="featured1.jpeg" className="rounded-3xl object-cover"/>
            {/* details  */}
            <div className="flex items-center gap-4">
                <h1 className='font-semibold lg:text-lg'>01.</h1>
                <Link className='text-cpAccent lg:text-lg'>Web Design</Link>
                <span className='text-gray-500'>2 days ago</span>
            </div>
            {/* title  */}
            <Link to="/test" className='text-xl lg:text-3xl font-semibold lg:font-bold'
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, nihil?
            </Link>
        </div>
        {/* other posts */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4"></div>
    </div>
  )
}

export default FeaturedPosts