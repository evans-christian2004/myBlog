import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'
const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src='postImg.jpeg' className='sm:rounded-3xl rounded-2xl object-cover' w='735'/>
        </div>
        {/* details */}
        <div className=" flex flex-col gap-4 xl:w-2/3">
            {/* title */}
            <Link to='/test' className='font-semibold text-4xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, incidunt.
            </Link>
            {/* other details */}
            <div className="flex items-center gap-2 text-sm">
                <span>Written by</span>
                <Link className='text-cpAccent'>Christian Evans</Link>
                <span>on</span>
                <Link className='text-cpAccent'>Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                A fugit eaque totam porro odio dignissimos dolore quisquam
                 quidem fugiat deserunt, explicabo eveniet deleniti 
                 perferendis. Impedit velit atque porro tenetur, dolorem 
                 mollitia tempore asperiores cupiditate illo ex maxime 
                 sapiente dolore nesciunt.
            </p>
            <Link to='/test' className='underline text-cpAccent'>Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem