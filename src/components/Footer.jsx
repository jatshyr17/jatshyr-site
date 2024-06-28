import React from 'react'
import{
    
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
    

} from 'react-icons/fa'

function Footer() {
  return (
    <div id='Contact' className=' mx-auto py-4 px-6 grid lg:grid-cols-3 text-white bg-zinc-900 w-full '>
        <div>
        
        <h2 className='text-3xl font-bold w-full '>JATSHYR</h2>
        <div className='flex justify-between md:w-[75%] my-6'>
            
            <FaFacebookSquare  size={30}/>
            <FaGithubSquare  size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare  size={30}/>
        </div>
        
            
        

        </div>
    </div>
  )
}

export default Footer