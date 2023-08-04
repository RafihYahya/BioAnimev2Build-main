import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BsDot} from 'react-icons/bs'







const Schedule = () => {


    const [Anime4, setAnime4] = useState([])

    const [testing, settesting] = useState(false)
    const [Anime5, setAnime5] = useState([])
    const [Anime6, setAnime6] = useState([])


    const Anime7 = []
    const Anime8 = {Mondays:[],Tuesdays:[], Wednesdays:[], Thursdays:[], Fridays:[], Saturdays:[], Sundays:[], } 
    
    const Days = ['Mondays','Tuesdays', 'Wednesdays' ,'Thursdays' , 'Fridays' , 'Saturdays' , 'Sundays']

    useEffect(() => {
        Animegetallschedule() 
      }, [])

  
      {/* Max 3 request per second . since api is limited we had to be clever and send request sequentially rather than concurrently
    with a time delay betweeb them and hiding the delay at the beginning by custom simple fade in out animation  */}


    function createCustomTimeout(seconds) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, seconds * 1000);
        });
      }


       const  Animegetallschedule =  async () => { 
        for (let i = 0 ; i < 10 ; i++) {
                  await axios('https://api.jikan.moe/v4/schedules?page='+(i+1)).then((response) => {
                  Anime7.push(response.data.data)                  
                })
                await  createCustomTimeout(0.5)
                if (Anime7[i].length == 0) {
                  break
              }
                await Animefilterbyday(i)
                
              } 
              setAnime6(Anime8)           
       }


       const Animefilterbyday = async (i) => { 

            for (let index = 0; index < 25  ; index++) {
                      
                          if (!Anime7[i][index]) {
                            break
                        }
                        if ( Anime7[i][index].broadcast?.day == 'Mondays'  ) {
                                Anime8.Mondays.push(Anime7[i][index])
                        }
                        if ( Anime7[i][index].broadcast?.day == 'Tuesdays'  ) {
                          Anime8.Tuesdays.push(Anime7[i][index])
                        }
                        if ( Anime7[i][index].broadcast?.day == 'Wednesdays'  ) {
                          Anime8.Wednesdays.push(Anime7[i][index])
                        }
                        if ( Anime7[i][index].broadcast?.day == 'Thursdays'  ) {
                          Anime8.Thursdays.push(Anime7[i][index])
                        }
                        if ( Anime7[i][index].broadcast?.day == 'Fridays'  ) {
                          Anime8.Fridays.push(Anime7[i][index])
                        }
                        if ( Anime7[i][index].broadcast?.day == 'Saturdays'  ) {
                          Anime8.Saturdays.push(Anime7[i][index])
                        }
                        if ( Anime7[i][index].broadcast?.day == 'Sundays'  ) {
                          Anime8.Sundays.push(Anime7[i][index])
                        }
                      


            }
        
        }








  return (
    <div className=' w-screen sm:w-full h-full pt-[125px]'>
        <div className='w-full h-full mx-auto max-w-[1550px]'>
            
            <h1 className='text-4xl text-red-500 font-bold pb-10'>Schedule</h1>


            <div id='Monday'className=' mb-10 pb-48'>
                <div id='fadein'className=' scale-75 sm:scale-100 flex items-center justify-between border-b-2 border-red-400 mb-4 '>
                  <h2 className=' text-2xl font-bold uppercase  mb-2 pb-2  '>Monday</h2>
                  <div>
                    <ul className='flex flex-wrap sm:flex-no-wrap justify-between '>
                            <BsDot className='text-3xl mx-4 mb-4 text-red-500'/>
                            <a href='#Tuesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Wednesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Thursday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Friday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Saturday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#sunday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                    </ul>
                  </div>
                  <div></div>
                </div>
                
                <div id='delaydelay'className='flex flex-wrap items-center  gap-8 sm:gap-16 mx-10 p-4 w-full '>

                
               {Anime6.Mondays?.map((item,id)=>(

                <div key={id} className='flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'>
                        
                        <a className=' flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'
                        href={'/' + Anime6.Mondays[id]?.mal_id + '/0'}>
                          <div className='flex flex-col items-center justify-center'>
                          <img className=' object-fill rounded-md sm:w-[200px] w-[120px] ' src={Anime6.Mondays[id].images.jpg.image_url} width='' alt="" />
                          <h2 className='font-bold text-sm w-[100px] text-red-400/80 text-center  sm:hidden'>{Anime6.Mondays[id]?.title.length > 15? Anime6.Mondays[id]?.title.slice(0,20) : Anime6.Mondays[id]?.title }</h2>
                          </div>

                        
                        <div className=' transition-all duration-300 ease-in-out group-hover:w-52 w-20 group-hover:shadow-lg  group-hover:opacity-100 opacity-0 p-2 my-4 mx-2  hidden sm:flex items-center justify-center  flex-col '>

                        <h2 className='font-bold text-xl py-2 text-red-400/80 transition-all duration-300 ease-in group-hover:block hidden  p-4 '>{Anime6.Mondays[id]?.title.length > 25? Anime6.Mondays[id]?.title.slice(0,25) : Anime6.Mondays[id]?.title }</h2>
                            <h3 className='text-sm font-semibold'><span className={Anime6.Mondays[id]?.episodes? 'text-sm': 'hidden'}>Episodes:</span>{Anime6.Mondays[id]?.episodes}</h3>
                            <h3 className='text-sm '>{Anime6.Mondays[id]?.score}</h3>
                            <h3 className='text-sm '>{Anime6.Mondays[id]?.status}</h3>
                        </div> 
                        </a>
                </div>

                ))}               

                </div>
            </div>







            <div id='Tuesday'className='mb-10 pb-48'>

            <div id='fadein'className='scale-75 sm:scale-100 flex items-center justify-between border-b-2 border-red-400 mb-4 '>
                  <h2 className='text-2xl font-bold uppercase  mb-2 pb-2  '>Tuesday</h2>
                  <div>
                    <ul className='flex flex-wrap sm:flex-no-wrap justify-between '>
                            <a href='#Monday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <BsDot className='text-3xl mx-4 mb-4 text-red-500'/>
                            <a href='#Wednesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Thursday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Friday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Saturday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#sunday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                    </ul>
                  </div>
                  <div></div>
                </div>                
                <div id='delaydelay'className='flex flex-wrap items-center  gap-16 mx-10 p-4 w-full '>

                
               {Anime6.Tuesdays?.map((item,id)=>(

                <div key={id} className='flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'>
                        
                        <a className=' flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'
                        href={'/' + Anime6.Tuesdays[id]?.mal_id + '/0'}>
              <div className='flex flex-col items-center justify-center'>
                          <img className=' object-fill rounded-md sm:w-[200px] w-[120px] ' src={Anime6.Tuesdays[id].images.jpg.image_url} width='' alt="" />
                          <h2 className='font-bold text-sm w-[100px] text-red-400/80 text-center  sm:hidden'>{Anime6.Tuesdays[id]?.title.length > 15? Anime6.Tuesdays[id]?.title.slice(0,20) : Anime6.Tuesdays[id]?.title }</h2>
                          </div>                        
                        
                        <div className=' transition-all duration-300 ease-in-out group-hover:w-52 w-20 group-hover:shadow-lg  group-hover:opacity-100 opacity-0 p-2 my-4 mx-2  hidden sm:flex items-center justify-center  flex-col '>

                        <h2 className='font-bold text-xl py-2 text-red-400/80 transition-all duration-300 ease-in group-hover:block hidden  p-4 '>{Anime6.Tuesdays[id]?.title.length > 25? Anime6.Tuesdays[id]?.title.slice(0,25) : Anime6.Tuesdays[id]?.title }</h2>
                            <h3 className='text-sm font-semibold'><span className={Anime6.Tuesdays[id].episodes? 'text-sm': 'hidden'}>Episodes:</span>{Anime6.Mondays[id]?.episodes}</h3>
                            <h3 className='text-sm '>{Anime6.Tuesdays[id]?.score}</h3>
                            <h3 className='text-sm '>{Anime6.Tuesdays[id]?.status}</h3>
                        </div> 
                        </a>
                </div>

                ))}               

                </div>
            </div>

            <div id='Wednesday'className='mb-10 pb-48'>
            <div id='fadein'className='scale-75 sm:scale-100 flex items-center justify-between border-b-2 border-red-400 mb-4 '>
                  <h2 className='text-2xl font-bold uppercase  mb-2 pb-2  '>Wednesday</h2>
                  <div>
                    <ul className='flex flex-wrap sm:flex-no-wrap justify-between '>
                            <a href='#Monday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Tuesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <BsDot className='text-3xl mx-4 mb-4 text-red-500'/>
                            <a href='#Thursday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Friday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Saturday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#sunday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                    </ul>
                  </div>
                  <div></div>
                </div>                
                <div id='delaydelay'className='flex flex-wrap items-center  gap-16 mx-10 p-4 w-full '>

                
               {Anime6.Wednesdays?.map((item,id)=>(

                <div key={id} className='flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'>
                        
                        <a className=' flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'
                        href={'/' + Anime6.Wednesdays[id]?.mal_id + '/0'}>
            <div className='flex flex-col items-center justify-center'>
                          <img className=' object-fill rounded-md sm:w-[200px] w-[120px] ' src={Anime6.Wednesdays[id].images.jpg.image_url} width='' alt="" />
                          <h2 className='font-bold text-sm w-[100px] text-red-400/80 text-center  sm:hidden'>{Anime6.Wednesdays[id]?.title.length > 15? Anime6.Wednesdays[id]?.title.slice(0,20) : Anime6.Wednesdays[id]?.title }</h2>
                          </div>                        
                        
                        <div className=' transition-all duration-300 ease-in-out group-hover:w-52 w-20 group-hover:shadow-lg  group-hover:opacity-100 opacity-0 p-2 my-4 mx-2  hidden sm:flex items-center justify-center  flex-col '>

                        <h2 className='font-bold text-xl py-2 text-red-400/80 transition-all duration-300 ease-in group-hover:block hidden  p-4 '>{Anime6.Wednesdays[id]?.title.length > 25? Anime6.Wednesdays[id]?.title.slice(0,25) : Anime6.Wednesdays[id]?.title }</h2>
                            <h3 className='text-sm font-semibold'><span className={Anime6.Wednesdays[id].episodes? 'text-sm': 'hidden'}>Episodes:</span>{Anime6.Mondays[id]?.episodes}</h3>
                            <h3 className='text-sm '>{Anime6.Wednesdays[id]?.score}</h3>
                            <h3 className='text-sm '>{Anime6.Wednesdays[id]?.status}</h3>
                        </div> 
                        </a>
                </div>

                ))}               

                </div>
            </div>

            <div id='Thursday'className='mb-10 pb-48'>
            <div id='fadein'className='scale-75 sm:scale-100 flex items-center justify-between border-b-2 border-red-400 mb-4 '>
                  <h2 className='text-2xl font-bold uppercase  mb-2 pb-2  '>Thursday</h2>
                  <div>
                    <ul className='flex flex-wrap sm:flex-no-wrap justify-between '>
                            <a href='#Monday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Tuesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Wednesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <BsDot className='text-3xl mx-4 mb-4 text-red-500'/>
                            <a href='#Friday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Saturday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#sunday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                    </ul>
                  </div>
                  <div></div>
                </div>                
                <div id='delaydelay'className='flex flex-wrap items-center  gap-16 mx-10 p-4 w-full '>

                
               {Anime6.Thursdays?.map((item,id)=>(

                <div key={id} className='flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'>
                        
                        <a className=' flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'
                        href={'/' + Anime6.Thursdays[id]?.mal_id + '/0'}>

<div className='flex flex-col items-center justify-center'>
                          <img className=' object-fill rounded-md sm:w-[200px] w-[120px] ' src={Anime6.Thursdays[id].images.jpg.image_url} width='' alt="" />
                          <h2 className='font-bold text-sm w-[100px] text-red-400/80 text-center  sm:hidden'>{Anime6.Thursdays[id]?.title.length > 15? Anime6.Thursdays[id]?.title.slice(0,20) : Anime6.Thursdays[id]?.title }</h2>
                          </div>                        
                        
                        <div className='  transition-all duration-300 ease-in-out group-hover:w-52 w-20 group-hover:shadow-lg  group-hover:opacity-100 opacity-0 p-2 my-4 mx-2  hidden sm:flex items-center justify-center  flex-col '>

                        <h2 className='font-bold text-xl py-2 text-red-400/80 transition-all duration-300 ease-in group-hover:block hidden  p-4 '>{Anime6.Thursdays[id]?.title.length > 25? Anime6.Thursdays[id]?.title.slice(0,25) : Anime6.Thursdays[id]?.title }</h2>
                            <h3 className='text-sm font-semibold'><span className={Anime6.Thursdays[id]?.episodes? 'text-sm': 'hidden'}>Episodes:</span>{Anime6.Mondays[id]?.episodes}</h3>
                            <h3 className='text-sm '>{Anime6.Thursdays[id]?.score}</h3>
                            <h3 className='text-sm '>{Anime6.Thursdays[id]?.status}</h3>
                        </div> 
                        </a>
                </div>

                ))}               

                </div>
            </div>

            <div id='Friday'className='mb-10 pb-48'>

            <div id='fadein'className='flex scale-75 sm:scale-100  items-center justify-between border-b-2 border-red-400 mb-4 '>
                  <h2 className='text-2xl font-bold uppercase  mb-2 pb-2  '>Friday</h2>
                  <div>
                    <ul className='flex flex-wrap sm:flex-no-wrap justify-between '>
                            <a href='#Monday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Tuesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Thursday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Wednesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <BsDot className='text-3xl mx-4 mb-4 text-red-500'/>
                            <a href='#Saturday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#sunday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                    </ul>
                  </div>
                  <div></div>
                </div>                
                <div id='delaydelay'className='flex flex-wrap items-center  gap-16 mx-10 p-4 w-full '>

                
               {Anime6.Fridays?.map((item,id)=>(

                <div key={id} className='flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'>
                        
                        <a className=' flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'
                        href={'/' + Anime6.Fridays[id]?.mal_id + '/0'}>

<div className='flex flex-col items-center justify-center'>
                          <img className=' object-fill rounded-md sm:w-[200px] w-[120px] ' src={Anime6.Fridays[id].images.jpg.image_url} width='' alt="" />
                          <h2 className='font-bold text-sm w-[100px] text-red-400/80 text-center  sm:hidden'>{Anime6.Fridays[id]?.title.length > 15? Anime6.Fridays[id]?.title.slice(0,20) : Anime6.Fridays[id]?.title }</h2>
                          </div>                        
                        
                        <div className=' m-2 transition-all duration-300 ease-in-out group-hover:w-52 w-20 group-hover:shadow-lg  group-hover:opacity-100 opacity-0 p-2 my-4 mx-2  hidden sm:flex items-center justify-center  flex-col '>

                        <h2 className='font-bold text-xl py-2 text-red-400/80 transition-all duration-300 ease-in group-hover:block hidden  p-4 '>{Anime6.Fridays[id]?.title.length > 25? Anime6.Fridays[id]?.title.slice(0,25) : Anime6.Fridays[id]?.title }</h2>
                            <h3 className='text-sm font-semibold'><span className={Anime6.Fridays[id]?.episodes? 'text-sm': 'hidden'}>Episodes:</span>{Anime6.Mondays[id]?.episodes}</h3>
                            <h3 className='text-sm '>{Anime6.Fridays[id]?.score}</h3>
                            <h3 className='text-sm '>{Anime6.Fridays[id]?.status}</h3>
                        </div> 
                        </a>
                </div>

                ))}               

                </div>
            </div>

            <div id='Saturday' className='mb-10 pb-48'>
            <div id='fadein'className='flex scale-75 sm:scale-100  items-center justify-between border-b-2 border-red-400 mb-4 '>
                  <h2 className='text-2xl font-bold uppercase  mb-2 pb-2  '>Saturday</h2>
                  <div>
                    <ul className='flex flex-wrap sm:flex-no-wrap justify-between '>
                            <a href='#Monday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Tuesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Thursday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Wednesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Friday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <BsDot className='text-3xl mx-4 mb-4 text-red-500'/>
                            <a href='#sunday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                    </ul>
                  </div>
                  <div></div>
                </div>                
                <div id='delaydelay'className='flex flex-wrap  items-center  gap-16 mx-10 p-4 w-full '>

                
               {Anime6.Saturdays?.map((item,id)=>(

                <div key={id} className='flex    cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'>
                        
                        <a className=' flex    cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'
                        href={'/' + Anime6.Saturdays[id]?.mal_id + '/0'}>

<div className='flex flex-col items-center justify-center'>
                          <img className=' object-fill rounded-md sm:w-[200px] w-[120px] ' src={Anime6.Saturdays[id].images.jpg.image_url} width='' alt="" />
                          <h2 className='font-bold text-sm w-[100px] text-red-400/80 text-center  sm:hidden'>{Anime6.Saturdays[id]?.title.length > 15? Anime6.Saturdays[id]?.title.slice(0,20) : Anime6.Saturdays[id]?.title }</h2>
                          </div>                        
                        
                        <div className='   transition-all duration-300 ease-in-out group-hover:w-52  w-20 group-hover:shadow-lg  group-hover:opacity-100 opacity-0 p-2 my-4 mx-2  hidden sm:flex items-center justify-center  flex-col '>

                        <h2 className='font-bold text-xl py-2 text-red-400/80 transition-all duration-300 ease-in group-hover:block hidden  p-4 '>{Anime6.Saturdays[id]?.title.length > 25? Anime6.Saturdays[id]?.title.slice(0,25) : Anime6.Saturdays[id]?.title }</h2>
                            <h3 className='text-sm font-semibold'><span className={Anime6.Saturdays[id]?.episodes? 'text-sm': 'hidden'}>Episodes:</span>{Anime6.Mondays[id]?.episodes}</h3>
                            <h3 className='text-sm '>{Anime6.Saturdays[id]?.score}</h3>
                            <h3 className='text-sm '>{Anime6.Saturdays[id]?.status}</h3>
                        </div> 
                        </a>
                </div>

                ))}               

                </div>
            </div>

            <div id='sunday'className='mb-10  pb-48'>
            <div id='fadein'className='scale-75 sm:scale-100 flex items-center justify-between border-b-2 border-red-400 mb-4 '>
                  <h2 className='text-2xl font-bold uppercase  mb-2 pb-2  '>Sunday</h2>
                  <div>
                    <ul className='flex flex-wrap sm:flex-no-wrap justify-between '>
                            <a href='#Monday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Tuesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Thursday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Wednesday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Friday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <a href='#Saturday'><BsDot className='text-3xl mx-4 mb-4 cursor-pointer  hover:text-red-500 hover:text-5xl transition-all duration-300 ease-in-out '/></a>
                            <BsDot className='text-3xl mx-4 mb-4 text-red-500'/>
                    </ul>
                  </div>
                  <div></div>
                </div>                
                <div id='delaydelay'className='flex flex-wrap items-center  gap-16 mx-10 p-4 w-full '>

                
               {Anime6.Sundays?.map((item,id)=>(

                <div key={id} className='flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'>
                        
                        <a className=' flex   cursor-pointer bg-[#1b1b1b] rounded-lg shadow-md hover:opacity-70 group hover:border-b-2 border-red-400'
                        href={'/' + Anime6.Sundays[id]?.mal_id + '/0'}>
<div className='flex flex-col items-center justify-center'>
                          <img className=' object-fill rounded-md sm:w-[200px] w-[120px] ' src={Anime6.Sundays[id].images.jpg.image_url} width='' alt="" />
                          <h2 className='font-bold text-sm w-[100px] text-red-400/80 text-center  sm:hidden'>{Anime6.Sundays[id]?.title.length > 15? Anime6.Sundays[id]?.title.slice(0,20) : Anime6.Sundays[id]?.title }</h2>
                          </div>                        
                        
                        <div className=' transition-all duration-300 ease-in-out group-hover:w-52 w-20 group-hover:shadow-lg  group-hover:opacity-100 opacity-0 p-2 my-4 mx-2  hidden sm:flex items-center justify-center  flex-col '>

                            <h2 className='font-bold text-xl py-2 text-red-400/80 transition-all duration-300 ease-in group-hover:block hidden  p-4 '>{Anime6.Sundays[id]?.title.length > 25? Anime6.Sundays[id]?.title.slice(0,25) : Anime6.Sundays[id]?.title }</h2>
                            <h3 className='text-sm font-semibold'><span className={Anime6.Sundays[id]?.episodes? 'text-sm': 'hidden'}>Episodes:</span>{Anime6.Mondays[id]?.episodes}</h3>
                            <h3 className='text-sm '>{Anime6.Sundays[id]?.score}</h3>
                            <h3 className='text-sm '>{Anime6.Sundays[id]?.status}</h3>
                        </div> 
                        </a>
                </div>

                ))}               

                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Schedule