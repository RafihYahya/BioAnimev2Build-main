import  axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {AiOutlineSearch, AiOutlineArrowDown,AiOutlineClose} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {HiOutlineSearch} from 'react-icons/hi'

const Main = () => {

    const [Anime, setAnime] = useState([])
    const [Anime2, setAnime2] = useState([])
    const [first, setfirst] = useState("")
    const [second, setsecond] = useState(true)
    const [paginatenumber, setpaginatenumber] = useState('')
    
    const [pagination, setpagination] = useState(1)
    const [toggle, settoggle] = useState(false)
    const [togglev10, settogglev10] = useState(false)
    const [ID, setID] = useState(0)
    const [globaltoggle, setglobaltoggle] = useState(true)
    const [switch1, setswitch1] = useState(-1)
    const [test, settest] = useState(false)
    
   const black_url = ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/1536px-Black_colour.jpg"]

   const shake =["animate-spin"]
 
   const switch2 = ['anime','manga','characters','people']


   







   second != first? setTimeout(() => {
              setsecond(first)
   }, 1000) : setTimeout(() => {
    
   }, 1000);

   async function  createCustomTimeout(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000);
    });
  }


    useEffect(() => {
                createCustomTimeout(1)
               axios.get("https://api.jikan.moe/v4/"+switch2[ID]+"?q="+first).then((response) => {
                setAnime2(response.data.data)
                
              }).catch(e => {
                console.log(e)})
            },[second,(ID == switch1) ])
          
         
       
 
    const Togglev1 = () => { 
      
          setglobaltoggle(!globaltoggle)
          
     }


    

    const Togglev2 = (ID) => { 
      ID != 3 ? setID(ID+1) : setID(0)
      settoggle(!toggle)
      setpagination(1)

      setTimeout(() => {
        settoggle((previousState) => !previousState)
      }, 1000);
     }

    
    const Toggle = (id) => { 


      setpagination(id)

      settoggle(!toggle)


      setTimeout(() => {
        settoggle((previousState) => !previousState)
      }, 1000);

     }


     const fadeaway =(time) => { 
      settoggle(!toggle)


      setTimeout(() => {
        settoggle((previousState) => !previousState)
      }, time);
      }

      const searchablenable =() => { 
        !globaltoggle? setglobaltoggle(true) : ''
       }


     const updatermax3 = () => { 

      switch1 == 3 ? setswitch1(0) : setswitch1(switch1+1)
      }





    const FetchArray = ["top/anime?page=","top/manga?page=","top/characters?page=","top/people?page=","empty"]
    const FetchUrl = "https://api.jikan.moe/v4/"
    

    useEffect(() => {
       axios.get(FetchUrl+FetchArray[ID]+pagination).then((response) => {
        setAnime(response.data.data)
         
      }).catch(e => {
       console.log(e);
   })
    },[ID,pagination])

  
    
    





  return (
    <div id='main' className=' w-screen  sm:w-full h-full'>
        <div className='pt-40 h-full w-full max-w-[1500px] mx-auto   ' >
            <div className='w-full h-full'>
                <div className=' flex items-center justify-between pb-4 '>
                    <div className=' '>
                        <div className='flex justify-between '>
                            <BsDot onClick={ () => { setID(0); fadeaway(1200) ; searchablenable();setpagination(1) }} className={ID == 0? 'text-3xl text-red-600 hover:text-4xl transition-all duration-300 ease-in'  : 'transition-all duration-300 ease-in  text-3xl opacity-25 hover:text-4xl hover:text-red-600/80 cursor-pointer' }/>
                            <BsDot onClick={() => { setID(1); fadeaway(1200) ; searchablenable();setpagination(1) }} className= {ID == 1? 'text-3xl text-red-600 hover:text-4xl transition-all duration-300 ease-in'  : 'transition-all duration-300 ease-in text-3xl opacity-25 hover:text-4xl hover:text-red-600/80 cursor-pointer' }/>
                            <BsDot onClick={ () => { setID(2); fadeaway(1200) ; searchablenable() ;setpagination(1)}} className= {ID == 2? 'text-3xl text-red-600 hover:text-4xl transition-all duration-300 ease-in'  : 'transition-all duration-300 ease-in text-3xl opacity-25 hover:text-4xl hover:text-red-600/80 cursor-pointer' }/>
                            <BsDot onClick={() => { setID(3); fadeaway(1200) ; searchablenable() ;setpagination(1)}} className= {ID == 3? 'text-3xl text-red-600  hover:text-4xl transition-all duration-300 ease-in'  : 'transition-all duration-300 ease-in text-3xl opacity-25 hover:text-4xl hover:text-red-600/80 cursor-pointer' }/>
                            
                        </div>
                        <div>
                        <p className='pb-1 border-b-4 border-red-700  text-lg lg:text-2xl font-semibold uppercase cursor-pointer transition duration-500 hover:scale-110 hover:text-red-600 hover:border-white ' onClick={ () => { Togglev2(ID) } }>Top {FetchArray[ID].substring(FetchArray[ID].indexOf('?'), FetchArray[ID].indexOf('/')).replace('/','')}</p>
                        </div>

                    </div>
                    <div id='search' className=' gap-10 flex justify-center  flex-col items-center '>
                       
                       
            
                        <div className='relative hover:scale-x-110 hover:scale-y-105 transition-all duration-150 ease-in-out'>
                        
                        <input  value={first} name="Search" id='input'  className={globaltoggle? '  bg-[#1b1b1b] border-red-700 w-24 shadow-md transition-all duration-150 ease-in-out border-2 rounded-md p-3 flex text-center outline-none': ' bg-[#1b1b1b] relative text-center  text-md  shadow-lg w-[150px] lg:w-[500px]  md:w-[300px]  border-2 rounded-md p-3  flex  border-red-700 transition-all ease-in-out duration-150 '} onChange={(e) => setfirst(e.target.value)} />
                        <HiOutlineSearch onClick={()=>{Togglev1(); setswitch1(ID); fadeaway(200);setfirst('') }} className={globaltoggle? 'transition-all duration-150 ease-in-out  hover:text-red-400 text-3xl cursor-pointer font-bold text-white/80 absolute right-[10%] bottom-[50%] left-[35%] top-[25%]' : 'hidden' }/>
                        <IoMdClose onClick={()=>{Togglev1(); setswitch1(ID); fadeaway(200); setfirst('') }} className={!globaltoggle? ' transition-all duration-150 ease-in-out text-2xl cursor-pointer font-bold text-red-400 absolute right-[0%] bottom-[25%] md:left-[90%] left-[75%]' : 'hidden' }/>
                        </div>                          


                    </div>
                    <div></div>
                    
                  { /* <p className='  max-w-[150px] pb-1 border-b-4 border-red-700 text-lg lg:text-2xl font-semibold '>Filter</p> */}
                </div>
                <div id='map' className={toggle? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1  p-2 mt-10 transition-opacity ease-in duration-150 opacity-0 ' : ' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1  p-2 mt-10 transition-opacity ease-in duration-500 opacity-100 '}>




        {Anime?.map((item, id) => (
                    <div  key={id} className={second == first?  (second=="shakeitbabyyeah"? `${shake}`:'cursor-pointer group rounded-md bg-[#1b1b1b] hover:bg-[#1b1b1b]/80 shadow-lg m-2 hover:scale-105 transition-all ease-in-out duration-150 hover:border-t-2  border-red-500') : (' animate-pulse  cursor-pointer group rounded-md bg-[#1b1b1b] hover:bg-[#1b1b1b]/80 shadow-lg m-2 hover:scale-105 transition-all ease-in-out duration-150 ')}>
                    <a href={globaltoggle?  '/' + Anime[id]?.mal_id + '/' + ID : '/' + Anime2[id]?.mal_id + '/' + ID}>
                    <img src= {


                      (!globaltoggle)? (Anime2[id]?.images.jpg.large_image_url? Anime2[id].images.jpg.large_image_url : ( Anime2[id]?.images.jpg.image_url? Anime2[id].images.jpg.image_url : black_url)) : (Anime[id].images.jpg.large_image_url? Anime[id].images.jpg.large_image_url :Anime[id].images.jpg.image_url)
                      
                      } width="" alt="Anime" className=' pb-2  mx-auto object-fill  rounded-md hover:opacity-50'/>
                    <h2 className='group-hover:text-red-600 pt-2 text-md md:text-lg font-bold text-center mx-1 '>{globaltoggle? (Anime[id].title? Anime[id].title : Anime[id].name) :(Anime2[id]?.title? Anime2[id]?.title : Anime2[id]?.name)}
              
                    </h2>
                    <div className=' flex items-center justify-center pb-2 '>
                        
                    </div>
                    </a>
                </div> 
        )) }
              
                    

                </div>
            </div>
        </div>




        <div className='sm:scale-100 scale-75 w-full h-full'>
        <div className={globaltoggle? ' mx-auto max-w-[1580px] flex items-center justify-center' : ' hidden '}>
            <ul className='rounded-md bg-red-500/40 mt-8 py-2 mb-8 flex items-center justify-center'>
                <div className={pagination == 1? 'text-black bg-black/40 rounded-lg px-4 py-2 mx-1' : ' rounded-lg px-4 py-4'}>
                  <li className=' cursor-pointer hover:scale-125  transition-all duration-150 ease-in'><a onClick={()=>{Toggle(1)}}>1</a></li>
                </div>
                <div className={pagination == 2? 'text-black bg-black/40 rounded-lg px-4 py-2' : ' rounded-lg px-4 py-4'}>
                  <li className=' cursor-pointer hover:scale-125  transition-all duration-150 ease-in'><a onClick={()=>{Toggle(2)}}>2</a></li>
                </div>
                <div className={pagination == 3? 'text-black bg-black/40 rounded-lg px-4 py-2' : ' rounded-lg px-4 py-4'}>
                  <li className=' cursor-pointer hover:scale-125  transition-all duration-150 ease-in'><a onClick={()=>{Toggle(3)}}>3</a></li>
                </div>
                <div className={pagination == 4? 'text-black bg-black/40 rounded-lg px-4 py-2' : ' rounded-lg px-4 py-4'}>
                  <li className=' cursor-pointer hover:scale-125  transition-all duration-150 ease-in'><a onClick={()=>{Toggle(4)}}>4</a></li>
                </div>
                <div className={pagination == 5? 'text-black bg-black/40 rounded-lg px-4 py-2' : ' rounded-lg px-4 py-4'}>
                  <li className=' cursor-pointer hover:scale-125  transition-all duration-150 ease-in'><a onClick={()=>{Toggle(5)}}>5</a></li>
                </div>
                <div className={pagination == 6? 'text-black bg-black/40 rounded-lg px-4 py-2' : ' rounded-lg px-4 py-4'}>
                  <li className=' cursor-pointer hover:scale-125  transition-all duration-150 ease-in'><a onClick={()=>{Toggle(6)}}>6</a></li>
                </div>
                <div className={pagination == 7? 'text-black bg-black/40 rounded-lg px-4 py-2' : ' rounded-lg px-4 py-4'}>
                  <li className=' cursor-pointer hover:scale-125  transition-all duration-150 ease-in'><a onClick={()=>{Toggle(7)}}>7</a></li>
                </div>
                <div className={pagination == 8? 'text-black bg-black/40 rounded-lg px-4 py-2' : ' rounded-lg px-4 py-4'}>
                  <li className=' cursor-pointer hover:scale-125  transition-all duration-150 ease-in'><a onClick={()=>{Toggle(8)}}>8</a></li>
                </div>
                <div className={pagination == 9? 'text-black bg-black/40 rounded-lg px-4 py-2' : ' rounded-lg px-4 py-4'}>
                  <li className=' cursor-pointer hover:scale-125  transition-all duration-150 ease-in'><a onClick={()=>{Toggle(9)}}>9</a></li>
                </div>
                <div className='px-4 py-4 '>
                    <input  onChange={(e) => (setpaginatenumber(e.target.value))} className=' py-1 transition-all duration-300 ease-in opacity-20 hover:opacity-100 hover:bg-black/40 hover:w-12 w-8 rounded-md  text-center text-sm'/>
                    <button className={paginatenumber != '' ?  ' font-bold text-center hover:border-black/40 hover:text-black transition-all duration-200 ease-in ml-2 px-4 py-2  bg-black/40 border-2 border-red-400/40 rounded-md shadow-md' : 'hidden'}  onClick={()=> {Toggle(paginatenumber)}}>Enter</button>
                  
                  
                </div>
                
            </ul>
        </div>
    </div>
    </div>
  )
}


export default Main