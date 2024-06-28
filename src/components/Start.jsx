import React from 'react'
import k1 from '../assets1/k1.jpg'
import R1 from '../assets1/R1.jpg'
function Start() {
  return (
    <>
    <div id='inspirations' className=' bg-zinc-900 py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 rounded-md  my-5 bg-slate-300 pb-11 ' >
            <img className=' md:w-[200px] mx-auto md:my-4 ' src={k1} alt='$' />
            <div className='flex flex-col justify-center p-7'>
                <p className=' text-[#376bf0] font-bold'>MAIN INSIPIRATION IN BECOMING A LYRICIST</p>
                <h1 className='md:text-4xl sm:text-3xl text- xl font-bold py-2'>Writing remixes of his song...</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, eaque quidem maxime pariatur voluptatum ipsa quam voluptatibus accusamus a totam earum ipsam cumque perspiciatis doloremque corporis sequi deleniti deserunt odit?

                </p>
                

            </div>
         </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 rounded-md my-10 bg-slate-300 pb-3' >
            <img className='md:w-[300px] mx-auto my-4 ' src={R1} alt='$' />
            <div className='flex flex-col justify-center p-7'>
                <p className=' text-[#376bf0] font-bold'>MY INTRODUCTION TO RAP MUSIC</p>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Understanding his lyrical abilities..</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, eaque quidem maxime pariatur voluptatum ipsa quam voluptatibus accusamus a totam earum ipsam cumque perspiciatis doloremque corporis sequi deleniti deserunt odit?

                </p>
                

            </div>
        
            
            

            
            
            
        </div>


    </div>
    

    
    
    </>
    
    
  )
}

export default Start