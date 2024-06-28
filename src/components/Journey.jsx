import React from 'react'
import { ReactTyped } from 'react-typed'
function Journey() {
  return (
    <div id='Journey' className=' my-5 bg-white p-11 text-zinc-800 w-full ' >
        <h1 className='md:text-5xl sm:text-4xl text-4xl font-bold mx-auto sm:5 text-center font-serif flex justify-center my-auto '>
        <ReactTyped 
                strings = {["How my journey started..."]}
                typeSpeed={150}
                backSpeed={160}
                loop/></h1>
        <p className=' max-w-[900px] text-center justify-center mx-auto md:py-4 sm:p-9 p-9' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat asperiores nulla nesciunt debitis consectetur optio porro ipsam rerum perspiciatis mollitia corrupti atque incidunt maxime voluptate, excepturi est. Nulla, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas enim illum, consectetur iusto nam distinctio iste excepturi, beatae sequi facilis earum nostrum. Harum totam quis soluta eaque labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit explicabo amet doloremque odio ex soluta quasi maiores molestiae vitae, blanditiis, vero quae id aliquid. Minus tempora deserunt nam aut?</p>
    </div>

  )
}

export default Journey