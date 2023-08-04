import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  axios from 'axios'
import Disqus from "disqus-react"



const Content = () => {


  


const [Anime3, setAnime3] = useState([])
const [toggle, settoggle] = useState(false)
const [togglev1, settogglev1] = useState(false)
const [togglev2, settogglev2] = useState(false)





const [ido, setIdo] = useState('')
  const {id} = useParams()
  const {num} = useParams()

  const Arrayaxios =["/full","/characters","staff","pictures"]
  const ArrayID = ['anime','manga','characters','people']


useEffect(() => {
  axios.get("https://api.jikan.moe/v4/"+ArrayID[num]+"/"+id+Arrayaxios[0]).then((response) => {
                setAnime3(response.data.data)
                
              })
 
}, [])


const Synopsis =  (Anime3?.synopsis)? (Anime3?.synopsis) : ""
const OD = 1
const Tempo = (Anime3.voices?.map((item,id)=>(<a  key={id} className='px-2 cursor-pointer hover:text-red-400 hover:font-bold ' href={'/' + Anime3.voices[id].anime?.mal_id + '/0' } >{Anime3.voices[id].anime?.title}</a>)))
const Tempo1 = (Anime3.anime?.map((item,id)=>(<a  key={id} className='px-2 cursor-pointer hover:text-red-400 hover:font-bold ' href={'/' + Anime3.anime[id].anime.mal_id + '/0' } >{Anime3.anime[id].anime.title}</a>)))
const Tempo2 = (Anime3.manga?.map((item,id)=>(<a  key={id} className='px-2 cursor-pointer hover:text-red-400 hover:font-bold ' href={'/' + Anime3.manga[id].manga.mal_id + '/1' } >{Anime3.manga[id].manga.title}</a>)))
const Tempo3 = (Anime3.voices?.map((item,id)=>(<a  key={id} className='px-2 cursor-pointer hover:text-red-400 hover:font-bold ' href={'/' + Anime3.voices[id].person?.mal_id + '/3' } >{Anime3.voices[id].person?.name}</a>)))


const disqusShortname = "https-bioanime-netlify-app"
    const disqusConfig = {
      url: "https://bioanime.netlify.app/"+id+"/"+num,
      identifier: id + num,
      title: "Discussion"
    }

if (num == 0 || num == 1 ){
  return (



    <div className=' w-[screen] sm:scale-100 scale-75  sm:w-full h-full sm:pt-[125px] pt-[10px] '>
      <div className='w-full h-full mx-auto max-w-[1550px]'>
          <div className='p-10 mb-10 mt-4 block sm:flex items-baseline justify-between'>
            <div>
                <h1 className=' text-3xl font-bold text-red-500/80 uppercase '>{Anime3.title}</h1>
                <h2>{Anime3.title_english}</h2>  
                <h2>{Anime3.title_japanese}</h2> 
            </div>
            <div>
              <h1 className='text-3xl font-bold text-red-500/80 uppercase'>Score : <span className={Anime3.score > 7.9? 'text-green-500' : Anime3.score < 5? 'text-red-900' : 'text-white' }>{ Anime3.score}</span></h1>
            </div>
          </div>
          
            <div className='  pt-4  sm:p-6 grid md:grid-cols-3 sm:gap-8 gap-4  transition-all duration-300 ease-in  sm:w-full h-full'>

                    <div className='md:col-span-1 '>
                          <img className='pb-2  rounded-lg shadow-lg sm:w-full  w-screen' src={Anime3.images?.jpg.large_image_url} alt={Anime3.title} />
                          <a className=' flex justify-center  overflow-hidden  mx-auto  py-2 px-4 text-sm md:text-md text-red-500/40 hover:text-red-500/80' href={Anime3.url}>{Anime3.url}</a>  
                    </div>
                    <div className=' text-sm w-[430px] sm:w-full  bg-[#1b1b1b]/60  rounded-xl shadow-lg  md:col-span-2 '>
                        <div className=' flex flex-col  p-10 '>
                          



                        <ul className='flex justify-between  items-center h-[50px] mx-10   mt-0'>
                                <li className='font-bold text-md uppercase text-red-400/60  w-[100px]  '>Title :</li>
                                <li className='text-center my-4  mx-10 max-w-[500px] text-md uppercase '>{Anime3.title}</li>
                                <li></li>
                              </ul>

                              <ul className={num == 0? 'flex justify-between  items-center h-[50px] mx-10   ' : 'hidden'}>
                                <li  className='font-bold text-md uppercase text-red-400/60  w-[100px] '>Episodes:</li>
                                <li className='text-center my-4  mx-10'>
                                {Anime3.episodes?Anime3.episodes : '-' }
                                
                               
                                </li>
                                <li></li>

                              </ul>
                              <ul className={num == 1? 'flex justify-between  items-center mx-10 h-[50px]  ' : 'hidden'}>
                                <li  className='font-bold text-md uppercase text-red-400/60  w-[100px]  '>CHAPTERS:</li>
                                <li className='text-center my-4  mx-10'>
                                {Anime3.chapters? Anime3.chapters : '-'}
                                
                               
                                </li>
                                
                                <li></li>
                              </ul>

                              <ul className={num == 1? 'flex justify-between  items-center h-[50px] mx-10  ' : 'hidden'}>
                                <li  className='font-bold text-md uppercase text-red-400/60   w-[100px] '>volume:</li>
                                <li className='text-center my-4  mx-10'>
                                {Anime3.volumes? Anime3.volumes : '-'}
                                
                               
                                </li>
                                
                                <li></li>
                              </ul>


                              <ul className={num == 1? 'flex justify-between  items-center h-[50px] mx-10  ' : 'hidden'}>
                                <li  className='font-bold text-md uppercase text-red-400/60  w-[100px] '>favorites:</li>
                                <li className='text-center my-4  mx-10'>
                                {Anime3.favorites}
                                
                               
                                </li>
                                
                                <li></li>
                              </ul>

                              <ul className={num == 0? 'flex justify-between  items-center h-[50px] mx-10   ' : 'hidden'}>
                                <li className='font-bold text-md uppercase text-red-400/60   w-[100px] '>Duration:</li>
                                <li className='text-center my-4  mx-10 max-w-[500px] text-md uppercase ' id='1'>
                                {Anime3.duration}
                                </li>

                                
                                <li></li>

                              </ul>


                              <ul className='flex justify-between  items-center mx-10  h-[50px]  '>
                                <li className='font-bold text-md uppercase text-red-400/60  w-[100px]  '>Popularity:</li>
                                <li className='text-center my-4  mx-10 max-w-[500px] text-md uppercase ' id='1'>
                                {Anime3.popularity}
                                </li>

                                
                                <li></li>
                              </ul>

                              <ul className='flex justify-between  items-center mx-10 h-[50px]  '>
                                <li className='font-bold text-md uppercase text-red-400/60  w-[100px]  '>Rating:</li>
                                <li className='text-center my-4  mx-10 max-w-[500px] text-md uppercase' id='1'>
                                {Anime3.rating? Anime3.rating : '-'}
                                </li>

                                
                                <li></li>
                              </ul>

                              <ul className='flex justify-between  items-center mx-10 h-[50px]  '>
                                <li className='font-bold text-md uppercase text-red-400/60  w-[100px] '>Members:</li>
                                <li className='text-center my-4  mx-10 max-w-[500px] text-md uppercase' id='1'>
                                {Anime3.members}
                                </li>

                                
                                <li></li>
                              </ul>

                              <ul className='flex justify-between  items-center mx-10 h-[50px]  '>
                                <li className='font-bold text-md uppercase text-red-400/60  w-[100px] '>Source:</li>
                                <li className='text-center my-4  mx-10 max-w-[500px] text-md uppercase' id='1'>
                                {Anime3.source? Anime3.source : '-'}
                                </li>

                                
                                <li></li>
                              </ul>

                              <ul className='flex justify-between  items-center mx-10 h-[50px]  '>
                                <li className='font-bold text-md uppercase text-red-400/60  w-[100px] '>Status:</li>
                                <li className='text-center my-4  mx-10 max-w-[500px] text-md uppercase' id='1'>
                                {Anime3.status}
                                </li>

                                
                                <li></li>
                              </ul>

                              <ul className='flex justify-between  items-center mx-10 h-[50px]  '>
                                <li className='font-bold text-md uppercase text-red-400/60 w-[100px] '>Year:</li>
                                <li className='text-center my-4  	 mx-10 max-w-[500px] text-md uppercase' id='1'>
                                {Anime3.year? Anime3.year : '-'}
                                </li>

                                
                                <li></li>
                              </ul>


                              <ul className='flex justify-between  items-center mx-10 h-[50px]  	 '>
                                <li className='font-bold text-md uppercase text-red-400/60 w-[100px] '>Demographics:</li>
                                <li className='text-center my-4  	 mx-10 max-w-[500px] text-md uppercase' id='2'>
                                

                                <ul><li>{Anime3.demographics?.map((item,id)=>(<a key={id} className='px-2  '  >{Anime3.demographics[id]?.name}</a>))}</li></ul>

                                </li>
                                
                                
                                <li></li>
                              </ul>


                              <ul className='flex flex-col sm:flex-row justify-between  items-center mx-10 h-[50px]  '>
                                <li className='font-bold text-md uppercase text-red-400/60 w-[100px] '>Genres:</li>
                                <li className='text-center my-4  mx-10 max-w-[500px] text-md uppercase ' id='3'>
                                
                                <ul><li>{Anime3.genres?.map((item,id)=>(<a key={id} className='px-2  '  >{Anime3.genres[id]?.name}</a>))}</li></ul>
                                
                                </li>
                                <li></li>
                              </ul>


                              <ul className={num == 1? 'flex justify-between  items-center mx-10  h-[50px]  ' : 'hidden'}>
                                <li className='font-bold text-md uppercase text-red-400/60  w-[100px] '>Authors:</li>
                                <li className='text-center my-4  mx-10 max-w-[500px] text-md uppercase ' id='3'>
                                
                                <ul><li>{Anime3.authors?.map((item,id)=>(<a key={id} className='px-2 cursor-pointer hover:text-red-400 hover:font-bold ' href={'/' + Anime3.authors[id]?.mal_id + '/3' } >{Anime3.authors[id]?.name}</a>))}</li></ul>
                                
                                </li>
                                <li></li>
                              </ul>




                        </div>
                    </div>
                    <div className='w-[400px] sm:w-full py-20 px-10 my-4 md:col-span-3'>
                      <h1 className='pb-10 text-5xl text-red-500/70 font-bold'>Synopsis:</h1>
                      <div className='p-4  rounded-sm  border-t-2 border-l-2 border-red-500/60 '>
                          <p className='tracking-wide leading-relaxed'>{Synopsis}</p>
                      </div>
                    </div>




          </div>
          <div className=' ' >
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
           

          </div>
          </div>

          

    </div>
  )
}

else if (num == 2){
return (



  <div className=' w-screen  sm:w-full h-full pt-[125px]'>
    <div className='w-full h-full mx-auto max-w-[1550px]'>
        <div className='p-10 mb-10 mt-4 block sm:flex items-baseline justify-between'>
          <div>
              <h1 className=' text-3xl font-bold text-red-500/80 uppercase '>{Anime3.name}</h1>
                
              <h2>{Anime3.name_kanji}</h2> 
          </div>
          <div>
            <h1 className='text-3xl font-bold text-red-500/80 uppercase'>Favorites : <span className={Anime3.favorites > 60000? 'text-green-500' : Anime3.favorites < 10000? 'text-red-900' : 'text-white' }>{ Anime3.favorites}</span></h1>
          </div>
        </div>
        
          <div className='pt-4  sm:p-6 grid md:grid-cols-3 gap-8  transition-all duration-300 ease-in w-full h-full'>

                  <div className='md:col-span-1 '>
                        <img className=' rounded-lg shadow-lg sm:w-full mx-auto  scale-90  max-w-[450px]' src={Anime3.images?.jpg.image_url} alt={Anime3.title} />
                        <a className=' flex justify-center  overflow-hidden  mx-auto  py-2 px-4 text-sm md:text-md text-red-500/40 hover:text-red-500/80' href={Anime3.url}>{Anime3.url}</a>  
                  </div>
                  <div className='scale-75 sm:scale-100 text-sm w-[400px] sm:w-full bg-[#1b1b1b]/60  mt-10 rounded-xl shadow-lg  md:col-span-2 '>
                      <div className='   p-10 '>
                        

                              <ul className='flex justify-between  items-center mx-10 mb-6 mt-0'>
                                <li className='font-bold text-md uppercase text-red-400/60  '>Name :</li>
                                <li className='text-center m-10 max-w-[500px] text-md uppercase '>{Anime3.name}</li>
                                <li></li>
                              </ul>

                              <ul className='flex justify-between  items-center mx-10 my-6  '>
                                <li  className='font-bold text-md  uppercase  text-red-400/60  '>Nicknames:</li>
                                <li className='text-center m-10'>
                                <ul className='flex  sm:flex-row flex-col justify-between max-w-[500px] text-md uppercase'>{Anime3.nicknames?.map((item,id)=>(<li key={id} className='px-2'>{Anime3.nicknames[id]}</li>))}</ul>
                                
                               
                                </li>
                                
                                <li></li>
                              </ul>

                              <ul className='flex justify-between  items-center mx-10 my-10 '>
                                <li className='font-bold text-md uppercase text-red-400/60  '>Anime:</li>
                                <li className='text-center m-10 max-w-[500px] text-md uppercase' id='1'>
                                { toggle ?  (ido == '1' ? Tempo1 : Tempo1?.slice(0,2) )  : Tempo1?.slice(0,2) }
                                <span id='1' className={!toggle?  (Tempo1?.length > 10 ? 'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={(e)=> {setIdo(e.currentTarget.id) ; settoggle(true) }}>READ more ...</span>
                                <span id='1' className={toggle?  (Anime3.voices? 'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={()=> { settoggle(false) }}>READ less ...</span>
                                </li>

                                
                                <li></li>
                              </ul>


                              <ul className='flex justify-between  items-center mx-10 my-10 '>
                                <li className='font-bold text-md uppercase text-red-400/60 '>Manga:</li>
                                <li className='text-center m-10 max-w-[500px] text-md uppercase' id='2'>
                                { togglev1 ?  (ido == '2' ? Tempo2 : Tempo2?.slice(0,2) )  : Tempo2?.slice(0,2) }
                                <span id='2'className={!togglev1?  (Tempo2?.length > 10 ?  'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={(e)=> {setIdo(e.currentTarget.id) ; settogglev1(true)}}>READ more ...</span>
                              <span id='2' className={togglev1?  (Anime3.voices? 'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={()=> {settogglev1(false)  }}>READ less ...</span>
                                </li>
                                
                                
                                <li></li>
                              </ul>


                              <ul className='flex justify-between  items-center mx-10 my-10 '>
                                <li className='font-bold text-md uppercase text-red-400/60 '>Voices:</li>
                                <li className='text-center m-10 max-w-[500px] text-md uppercase ' id='3'>
                                { togglev2 ?  (ido == '3' ? Tempo3 : Tempo3?.slice(0,2) )  : Tempo3?.slice(0,2) }
                                <ul></ul>
                                <span id='3' className={!togglev2?  (Tempo3?.length > 10 ?  'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={(e)=> {setIdo(e.currentTarget.id) ; settogglev2(true)}}>READ more ...</span>
                                <span id='3' className={togglev2?  (Anime3.voices? 'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={()=> {settogglev2(false)}}>READ less ...</span>
                                
                                </li>
                                <li></li>
                              </ul>











                      </div>
                  </div>
                  <div className='sm:w-full w-screen py-20 px-10 my-4 md:col-span-3'>
                    <h1 className='pb-10 text-5xl text-red-500/70 font-bold'>About:</h1>
                    <div className='p-4  rounded-sm transition-all duration-300 ease-in border-t-2 border-l-2 border-red-500/60 '>
                        <p className='tracking-wide leading-relaxed'>{Anime3.about}</p>
                    </div>
                  </div>
        </div>
        <div className=' ' >
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
           

          </div>
        </div>
  </div>
)
} else {
  return (
    <div className='w-screen sm:w-full h-full pt-[125px]'>
    <div className='w-full h-full mx-auto max-w-[1550px]'>
        <div className='p-10 mb-10 mt-4 block sm:flex items-baseline justify-between'>
          <div>
              <h1 className=' text-3xl font-bold text-red-500/80 uppercase '>{Anime3.name}</h1>
              <h2>{Anime3.family_name}</h2>
              <h2>{Anime3.given_name}</h2> 
          </div>
          <div>
            <h1 className='text-3xl font-bold text-red-500/80 uppercase'>Favorites : <span className={Anime3.favorites > 60000? 'text-green-500' : Anime3.favorites < 10000? 'text-red-900' : 'text-white' }>{ Anime3.favorites}</span></h1>
          </div>
        </div>
        
          <div className='pt-4   sm:p-6 grid md:grid-cols-3 gap-8  transition-all duration-300 ease-in w-full h-full'>

                  <div className='md:col-span-1 '>
                        <img className=' rounded-lg shadow-lg  mx-auto max-w-[450px]  sm:w-full scale-90 ' src={Anime3.images?.jpg.image_url} alt={Anime3.title} />
                        <a className=' flex justify-center  overflow-hidden  mx-auto  py-2 px-4 text-sm md:text-md text-red-500/40 hover:text-red-500/80' href={Anime3.url}>{Anime3.url}</a>  
                  </div>
                  <div className=' text-sm  scale-95 sm:scale-100 w-[400px] sm:w-full bg-[#1b1b1b]/60  mt-10 rounded-xl shadow-lg  md:col-span-2 '>
                      <div className=' p-10 '>
                        



                      <ul className='flex justify-between  items-center mx-10 mb-6 mt-0'>
                                <li className='font-bold text-md uppercase text-red-400/60  '>Name :</li>
                                <li className='text-center m-10 max-w-[500px] text-md uppercase '>{Anime3.name}</li>
                                <li></li>
                              </ul>
                      <ul className='flex justify-between  items-center mx-10 mb-6 mt-0'>
                                <li className='font-bold text-md uppercase text-red-400/60  '>Birthday :</li>
                                <li className='text-center m-10 max-w-[500px] text-md uppercase '>{Anime3.birthday}</li>
                                <li></li>
                              </ul>

                              <ul className='flex justify-between  items-center mx-10 my-6  '>
                                <li  className='font-bold text-md uppercase text-red-400/60  '>Alt Names:</li>
                                <li className='text-center m-10'>
                                <ul className='flex  flex-col sm:flex-row justify-between max-w-[500px] text-md uppercase'>{Anime3.alternate_names?.map((item,id)=>(<li key={id} className='px-2'>{Anime3.alternate_names[id]}</li>))}</ul>
                                
                               
                                </li>
                                
                                <li></li>
                              </ul>

                              <ul className='flex justify-between  items-center mx-10 my-10 '>
                                <li className='font-bold text-md uppercase text-red-400/60  '>Anime:</li>
                                <li className='text-center max-w-[200px] m-10 sm:max-w-[500px] text-md uppercase' id='1'>
                                { toggle ?  (ido == '1' ? Tempo1 : Tempo1?.slice(0,2) )  : Tempo1?.slice(0,2) }
                                <span id='1' className={!toggle?  (Tempo1?.length > 10 ? 'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={(e)=> {setIdo(e.currentTarget.id) ; settoggle(true) }}>READ more ...</span>
                                <span id='1' className={toggle?  (Anime3.voices? 'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={()=> { settoggle(false) }}>READ less ...</span>
                                </li>

                                
                                <li></li>
                              </ul>


                              <ul className='flex justify-between  items-center mx-10 my-10 '>
                                <li className='font-bold text-md uppercase text-red-400/60 '>Manga:</li>
                                <li className='text-center max-w-[200px] m-10 sm:max-w-[500px] text-md uppercase' id='2'>
                                { togglev1 ?  (ido == '2' ? Tempo2 : Tempo2?.slice(0,2) )  : Tempo2?.slice(0,2) }
                                <span id='2'className={!togglev1?  (Tempo2?.length > 10 ?  'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={(e)=> {setIdo(e.currentTarget.id) ; settogglev1(true)}}>READ more ...</span>
                              <span id='2' className={togglev1?  (Anime3.voices? 'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={()=> {settogglev1(false)  }}>READ less ...</span>
                                </li>
                                
                                
                                <li></li>
                              </ul>


                              <ul className='flex justify-between  items-center mx-10 my-10 '>
                                <li className='font-bold text-md uppercase text-red-400/60 '>Voices:</li>
                                <li className='text-center max-w-[200px] m-10 sm:max-w-[500px] text-md uppercase ' id='3'>
                                {!togglev2? Tempo?.slice(0,10): Tempo}
                                <ul></ul>
                                <span id='3' className={!togglev2?  (Tempo3?.length > 10 ?  'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={(e)=> {setIdo(e.currentTarget.id) ; settogglev2(true)}}>READ more ...</span>
                                <span id='3' className={togglev2?  (Anime3.voices? 'flex justify-center uppercase text-red-400/80 text-lg font-bold cursor-pointer hover:text-white' : 'hidden') : 'hidden'} onClick={()=> {settogglev2(false)}}>READ less ...</span>
                                
                                </li>
                                <li></li>
                              </ul>




                      </div>
                  </div>
                  <div className='sm:w-full w-screen py-20 px-10 my-4 md:col-span-3'>
                    <h1 className='pb-10 text-5xl text-red-500/70 font-bold'>About:</h1>
                    <div className='p-4  rounded-sm transition-all duration-300 ease-in border-t-2 border-l-2 border-red-500/60 '>
                        <p className='tracking-wide leading-relaxed'>{Anime3.about}</p>
                    </div>
                  </div>
        </div>
        <div className=' ' >
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
           

          </div>
        </div>
  </div>
  )
}
  



}

export default Content