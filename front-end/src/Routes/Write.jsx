import { useUser } from '@clerk/clerk-react'
import React from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const {isLoaded, isSignedIn} = useUser()

if(!isLoaded) {
  return <div className="">Loading...</div>
}

if(isLoaded && !isSignedIn) {
  return <div className="">You should log in!</div>
}

  return (
    <div className="h-[calc(100vh)-64px] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Share Something!</h1>
      <form action="" className="flex flex-col gap-6 flex-1 mb-10">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-white bg-cpSecondary">Add a cover image</button>
        <input className='text-4xl bg-transparent font-medium outline-none'  type="text" placeholder='The Best Title Ever...'/>
        <div className="">
          <label htmlFor="">Choose a category:</label>
          <select className='mx-4 p-2 rounded-xl bg-cpSecondaryLight' name="cat" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="databases">Databases</option>
            <option value="information-technology">Information Technology</option>
            <option value="networking">networking</option>
          </select>
        </div>
        <textarea className='p-4 rounded-xl drop-shadow-md' name="desc" id="" placeholder='Only the best of descriptions...'/>
        <ReactQuill theme='snow' className='flex-1 rounded-xl drop-shadow-md bg-white'/>
        <button className='bg-cpAccent w-36 text-white p-3 font-medium rounded-xl m-auto'>Post</button>
      </form>
    </div>
  )
}

export default Write