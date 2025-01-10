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
    <div className=''>
      <h1>Share Something New</h1>
      <form action="">
        <button>Add a cover image</button>
        <input type="text" placeholder='The Best Title Ever'/>
        <div className="">
          <label htmlFor="">Choose a category:</label>
          <select name="cat" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="databases">Databases</option>
            <option value="information-technology">Information Technology</option>
            <option value="networking">Networking</option>
          </select>
        </div>
        <textarea name="desc" id="" placeholder='only the shortest of descriptions'></textarea>
        <ReactQuill theme='snow'/>
        <button>Post</button>
      </form>
    </div>
  )
}

export default Write