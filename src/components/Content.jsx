import React from 'react'
import { ReactTyped } from "react-typed";

function Content() {
  return (
    <div id='Home' className=' text-zinc-800 ' >
        <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center bg-[url('>
        <p className=' text-blue-500 font-bold'>BORN TO EAT THE GAME</p>
           <h1 className='md:text-7xl sm:text-4xl text-4xl font-bold md:py-6'>BEST LYRICIST IN THE BIZZ</h1>
            <div className='flex justify-center items-center' >
                <p className='md:text-3xl sm:text-2xl text-l font-bold '>Can write on all kind of beats.. </p>
                <ReactTyped 
                className=' md:text-3xl sm:text-2xl text-l font-bold mx-2'
                strings = {['Drill','RnB','Lofi','House','Rage','Gangsta']}
                typeSpeed={120}
                backSpeed={140}
                loop/>
                </div>
                <div>
                    <p className=' md:text-2xl text-l font-bold text-zinc-600 pt-2 '>Want to try some just click on the button below</p>
                    <button onClick={console.log("works")} className=' bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '><a href='#button'>Try some</a></button>
                </div>
                

            


        </div>
        </div>
  )
}

export default Content