import React from 'react'
import Search from './search'
import { Link } from 'react-router-dom'

const PostsSideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-8'>
        <h1 className='mb-4 text-sm font-medium'>Search</h1>
        <Search/>
        <h1 className='mb-4 mt-8 text-sm font-medium'>Filters</h1>
        <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name="sort" value="newest" className='appearance-none w-4 h-4 border-[2px] 
                border-cpAccent rounded-sm checked:bg-cpAccent bg-white'
                />Newest
            </label>
            <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name="sort" value="popular" className='appearance-none w-4 h-4 border-[2px] 
                border-cpAccent rounded-sm checked:bg-cpAccent bg-white'
                />Most Popular
            </label>
            <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name="sort" value="trending" className='appearance-none w-4 h-4 border-[2px] 
                border-cpAccent rounded-sm checked:bg-cpAccent bg-white'
                />Trending
            </label>
            <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name="sort" value="oldest" className='appearance-none w-4 h-4 border-[2px] 
                border-cpAccent rounded-sm checked:bg-cpAccent bg-white'
                />Oldest
            </label>
        </div>
        <h1 className='mb-4 mt-8 text-sm font-medium'>Categories</h1>
        <div className="flex flex-col gap-2 text-sm">
            <Link className='py-1 px-2 rounded-full bg-cpSecondaryLight 
            hover:bg-cpAccent hover:text-white transition-all' to='/posts'
            >All</Link>
            <Link className='py-1 px-2 rounded-full bg-cpSecondaryLight 
            hover:bg-cpAccent hover:text-white transition-all' to='/posts?cat=web-design'
            >Web Design</Link>
            <Link className='py-1 px-2 rounded-full bg-cpSecondaryLight 
            hover:bg-cpAccent hover:text-white transition-all' to='/posts?cat=databases'
            >Databases</Link>
            <Link className='py-1 px-2 rounded-full bg-cpSecondaryLight 
            hover:bg-cpAccent hover:text-white transition-all' to='/posts?cat=information-technology'
            >Information Technology</Link>
            <Link className='py-1 px-2 rounded-full bg-cpSecondaryLight 
            hover:bg-cpAccent hover:text-white transition-all' to='/posts?networking'
            >Networking</Link>
        </div>
    </div>
  )
}

export default PostsSideMenu