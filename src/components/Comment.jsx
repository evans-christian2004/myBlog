import React from 'react'
import Image from './Image'

const Comment = () => {
  return (
    <div className='bg-cpPrimaryLight rounded-xl p-4 mb-8'>
        <div className="flex flex-row items-center gap-3">
            <Image src='userImg.jpeg' className='w-10 h-10 rounded-full object-cover' w="40"/>
            <span className='font-medium'>John Doe</span>
            <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <div className="mt-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Doloremque, ex, molestias ipsam excepturi possimus hic
                 impedit delectus veritatis adipisci temporibus, et atque
                  incidunt dolorem non commodi eveniet doloribus. Obcaecati,
                   sed.
            </p>
        </div>
    </div>
  )
}

export default Comment