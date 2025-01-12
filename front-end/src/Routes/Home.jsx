import React from 'react'
import { Link } from 'react-router-dom'
import MainCategories from '../components/MainCategories'
import FeaturedPosts from '../components/FeaturedPosts'
import PostsList from '../components/PostsList'

const Home = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/*breadcrumb*/}
      <div className="flex gap-3">
        <Link to="/">Home</Link>
        <span className='font-bold'>•</span>
        <span className='text-cpAccent'>Blogs and Articles</span>
      </div>
      {/*Introduction*/}
      <div className='flex items-center justify-between gap-8'>
        {/* titles */}
        <div className="">
          <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className='mt-8 text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur ullam explicabo.</p>  
        </div>
        {/* animated button */}
        <Link to='write' className='hidden md:block relative'>
          <svg
            viewBox='0 0 200 200'
            width='200'
            height='200'
            className='text-lg tracking-widest animate-spin animatedButton'
          >
            <path
              id='circlePath'
              fill='none'
              d='M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0'
            />
            <text>
              <textPath href='#circlePath' startOffset="0%">What did you learn? •</textPath>
              <textPath href='#circlePath 'startOffset="50%">Share your progress •</textPath>
            </text>
          </svg>
          <button className='absolute top-0 right-0 left-0 bottom-0 m-auto w-24 h-24 bg-cpPrimary rounded-full flex items-center justify-center'>
            <img className='w-20 p-3'src="write.svg" alt="" />
          </button>
        </Link>
      </div>
      {/* categories */}
      <MainCategories/>
      {/*featured posts*/}
      <FeaturedPosts/>
      {/*post list*/}
      <div className="">
        <h1 className='my-8 text-3xl  text-gray-600'>Recent Posts</h1>
        <PostsList/>
      </div>
    </div>
  )
}

export default Home