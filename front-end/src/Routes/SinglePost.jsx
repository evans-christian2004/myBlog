import React from 'react'
import Image from '../components/Image'
import { Link } from 'react-router-dom'
import PostMenuActions from '../components/postMenuActions'
import Search from '../components/search'
import Comments from '../components/Comments'

const SinglePost = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Accusantium perspiciatis iure quam.
          </h1>
          <div className="flex items-center gap-2">
            <span>written by</span>
            <Link className='text-cpAccent '>Christian Evans</Link>
            <span>on</span>
            <Link className='text-cpAccent '>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className='text-gray-500 font-medium'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
             magni blanditiis hic doloremque magnam exercitationem harum quam 
             adipisci odio in quae earum deleniti minima consequatur necessitatibus
              incidunt tenetur vero. Quibusdam esse quisquam tempora quo quaerat quis
               culpa harum minima quos voluptates, illum, quae obcaecati in ipsa exercitationem
                inventore odio ea.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-3xl"/>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify font-medium">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, necessitatibus repudiandae?
             Cupiditate officia dolor excepturi blanditiis ea quas assumenda saepe, esse autem 
             necessitatibus. Nostrum iusto dignissimos impedit. Voluptate, modi mollitia accusamus 
             culpa nobis quas cumque labore ullam maxime molestiae vitae quaerat velit quos optio 
             sunt odio delectus reprehenderit consequuntur possimus fugit dolor. Blanditiis, 
             accusamus, libero, placeat dolorem neque quod eius qui dolor quaerat laboriosam 
             sunt totam adipisci tempora? Consectetur ducimus modi expedita sequi labore reiciendis 
             eveniet vero ratione voluptatibus atque nihil distinctio veritatis, impedit voluptatem
              veniam aliquam non laboriosam ex, adipisci totam esse repellat vel. Nesciunt et ratione qui eveniet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, necessitatibus repudiandae?
             Cupiditate officia dolor excepturi blanditiis ea quas assumenda saepe, esse autem 
             necessitatibus. Nostrum iusto dignissimos impedit. Voluptate, modi mollitia accusamus 
             culpa nobis quas cumque labore ullam maxime molestiae vitae quaerat velit quos optio 
             sunt odio delectus reprehenderit consequuntur possimus fugit dolor. Blanditiis, 
             accusamus, libero, placeat dolorem neque quod eius qui dolor quaerat laboriosam 
             sunt totam adipisci tempora? Consectetur ducimus modi expedita sequi labore reiciendis 
             eveniet vero ratione voluptatibus atque nihil distinctio veritatis, impedit voluptatem
              veniam aliquam non laboriosam ex, adipisci totam esse repellat vel. Nesciunt et ratione qui eveniet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, necessitatibus repudiandae?
             Cupiditate officia dolor excepturi blanditiis ea quas assumenda saepe, esse autem 
             necessitatibus. Nostrum iusto dignissimos impedit. Voluptate, modi mollitia accusamus 
             culpa nobis quas cumque labore ullam maxime molestiae vitae quaerat velit quos optio 
             sunt odio delectus reprehenderit consequuntur possimus fugit dolor. Blanditiis, 
             accusamus, libero, placeat dolorem neque quod eius qui dolor quaerat laboriosam 
             sunt totam adipisci tempora? Consectetur ducimus modi expedita sequi labore reiciendis 
             eveniet vero ratione voluptatibus atque nihil distinctio veritatis, impedit voluptatem
              veniam aliquam non laboriosam ex, adipisci totam esse repellat vel. Nesciunt et ratione qui eveniet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, necessitatibus repudiandae?
             Cupiditate officia dolor excepturi blanditiis ea quas assumenda saepe, esse autem 
             necessitatibus. Nostrum iusto dignissimos impedit. Voluptate, modi mollitia accusamus 
             culpa nobis quas cumque labore ullam maxime molestiae vitae quaerat velit quos optio 
             sunt odio delectus reprehenderit consequuntur possimus fugit dolor. Blanditiis, 
             accusamus, libero, placeat dolorem neque quod eius qui dolor quaerat laboriosam 
             sunt totam adipisci tempora? Consectetur ducimus modi expedita sequi labore reiciendis 
             eveniet vero ratione voluptatibus atque nihil distinctio veritatis, impedit voluptatem
              veniam aliquam non laboriosam ex, adipisci totam esse repellat vel. Nesciunt et ratione qui eveniet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, necessitatibus repudiandae?
             Cupiditate officia dolor excepturi blanditiis ea quas assumenda saepe, esse autem 
             necessitatibus. Nostrum iusto dignissimos impedit. Voluptate, modi mollitia accusamus 
             culpa nobis quas cumque labore ullam maxime molestiae vitae quaerat velit quos optio 
             sunt odio delectus reprehenderit consequuntur possimus fugit dolor. Blanditiis, 
             accusamus, libero, placeat dolorem neque quod eius qui dolor quaerat laboriosam 
             sunt totam adipisci tempora? Consectetur ducimus modi expedita sequi labore reiciendis 
             eveniet vero ratione voluptatibus atque nihil distinctio veritatis, impedit voluptatem
              veniam aliquam non laboriosam ex, adipisci totam esse repellat vel. Nesciunt et ratione qui eveniet.
          </p>

        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
            <Image src='userImg.jpeg' className="rounded-full w-12 h-12 object-cover"
              h="48"
              w="48"
            />
            <Link className='text-cpAccent'>Christian Evans</Link>
            </div>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div className="flex gap-2">
              <Link>
                <Image src='facebook.svg'/>
              </Link>
              <Link>
                <Image src='instagram.svg'/>
              </Link>
            </div>
          </div>
          <PostMenuActions/>
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-medium">
            <Link className='rounded-full bg-cpSecondaryLight px-2 py-1'>Web Design</Link>
            <Link className='rounded-full bg-cpSecondaryLight px-2 py-1'>Databases</Link>
            <Link className='rounded-full bg-cpSecondaryLight px-2 py-1'>Information Technology</Link>
            <Link className='rounded-full bg-cpSecondaryLight px-2 py-1'>Networking</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search/>
        </div>
      </div>
      <Comments/>
    </div>
  )
}

export default SinglePost