import React from 'react'
import {FaReact} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiTailwindcss,SiVite,SiMyanimelist} from 'react-icons/si'




const Contact = () => {
  return (
    <div id='contact' className=' pb-10 w-full h-full bg-black mt-[300px]  bottom-0  '>
        <div className=' scale-90 w-full max-w-[1500px] mx-auto mt-20 pt-20 pb-10 flex flex-col  md:flex-row justify-between items-center'>
            <div className='sm:pb-0 pb-[100px]'>
              <h2 className='font-bold py-2 text-2xl border-b-2'>Made By</h2>
              <ul className='flex justify-items-start py-4 '>
                <div className='pr-4 py-2 hover:scale-110 transition-all duration-200 ease-in-out '>
                  <a href="https://react.dev"> <FaReact className='text-5xl  hover:text-red-500'/> </a>               
                </div>
                <div className='px-4 py-2 hover:scale-110 transition-all duration-200 ease-in-out '>
                  <a href="https://tailwindcss.com"> <SiTailwindcss className='text-5xl  hover:text-red-500'/> </a>               
                </div>
                <div className='px-4 py-2 hover:scale-110 transition-all duration-200 ease-in-out '>
                  <a href="https://vitejs.dev"> <SiVite className='text-5xl  hover:text-red-500'/> </a>               
                </div>
                <div className='px-4 py-2 hover:scale-110 transition-all duration-200 ease-in-out '>
                  <a href="https://docs.api.jikan.moe"> <SiMyanimelist className='text-5xl  hover:text-red-500'/> </a>               
                </div>
              </ul>
            </div>

            
            <div className='flex flex-col py-2'>
              <h2 className='text-2xl border-b-2  p-2 font-bold'>Special Thanks To</h2>
              <ul className='flex '>
                <div className=' group px-4 py-4 flex items-center justify-center flex-col hover:scale-110 transition-all duration-200 ease-in-out '>
                  <a href="https://github.com/lailaaaed03"> <AiOutlineGithub className='text-4xl group-hover:text-red-500'/> </a>
                  <a href="https://github.com/lailaaaed03" className='text-sm  group-hover:text-red-500'>Laila Eddaris</a>
                </div>
                <div className='group px-4 py-4 flex items-center justify-center flex-col hover:scale-110 transition-all duration-200 ease-in-out '>
                  <a href="https://github.com/not0lucky"> <AiOutlineGithub className='text-4xl group-hover:text-red-500'/> </a>  
                  <a href="https://github.com/not0lucky" className='text-sm group-hover:text-red-500'>Anir Agram</a>
             
                </div>
                <div className='group px-4 py-4 flex items-center justify-center flex-col hover:scale-110 transition-all duration-200 ease-in-out '>
                  <a href="https://github.com/dohaMST"> <AiOutlineGithub className='text-4xl group-hover:text-red-500'/> </a>    
                  <a href="https://github.com/dohaMST" className='text-sm group-hover:text-red-500'>Doha Mastour</a>
           
                </div>
                


              </ul>
            </div>



            
        </div>
        
    </div>
  )
}

export default Contact