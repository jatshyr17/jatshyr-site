import React ,{useState}from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
  const[nav, setNav] = useState(false)

  const handleNav=()=>{
      setNav(!nav);
 };
  return (
    <div className=' text-zinc-800 font-bold flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 sticky top-0 bg-white '>
    <h2 className='text-3xl font-bold w-full '>JATSHYR</h2>
    <ul className='hidden md:flex'>
        <li className='p-5 hover:text-blue-500 active:text-blue-600'><a href='#Home'>Home</a></li>
        <li className='p-5 hover:text-blue-500 active:text-blue-600'><a href='#inspirations'>Inspirations</a></li>
        <li className='p-5 hover:text-blue-500 active:text-blue-600'><a href='#Journey'>Journey</a></li>
        <li className='p-5 hover:text-blue-500 active:text-blue-600'><a href='#Contact'>Contact</a></li>
       
    </ul>
     <div onClick={handleNav} className='block md:hidden'>
      {!nav? <AiOutlineClose size={20}/>:
       <AiOutlineMenu size={20}/>}</div>
     
    
    <div className={!nav?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000 text-white  ':'fixed left-[-100%] ' }>
    <h2 className='text-3xl font-bold w-full p-5'>JATSHYR</h2>

    <ul className='uppercase p-4'>
        <li className='p-4 border-b border-gray-600 hover:text-blue-500 active:text-blue-600'><a href='#Home'>Home</a></li>
        <li className='p-4 border-b border-gray-600 hover:text-blue-500 active:text-blue-600'><a href='#inspirations'>Inspirations</a></li>
        <li className='p-4 border-b border-gray-600 hover:text-blue-500 active:text-blue-600'><a href='#Journey'>Journey</a></li>
        <li className='p-4 border-b border-gray-600 hover:text-blue-500 active:text-blue-600'><a href='#Contact'>Contact</a></li>
        </ul>


    </div>
    
   
    </div>


  )
}

export default Navbar