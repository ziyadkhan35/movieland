import { useRouter } from 'next/router'
import React from 'react'
import Pagination from './Pagination'

const LeftSideForFilms = (props) => {
    const router = useRouter()
  return (
    <>
        <div className="basis-full lg:basis-2/3 p-3">
            <h2 className='text-land-cyan text-2xl font-bold mt-2 font-montserrat tracking-tighter mb-6 ms-5'>{props.header}</h2>
            <div className="flex-wrap grid grid-cols-2 sm:grid-cols-3 gap-6 px-4">
                {
                    props.data.map((film)=>(
                        <div className="bg-black group shadow-2xl relative overflow-hidden rounded-md cursor-pointer" onClick={()=>router.push(`/movie/${film.id}`)} key={film.id}>
                            <img className='group-hover:scale-110 group-hover:opacity-80 duration-300' src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" />
                            {/* language and vote avarage*/}
                            <div className="absolute top-2 flex justify-between w-full px-3">
                                <p className='uppercase bg-yellow-500 text-gray-950 px-2 py-1 text-xs rounded shadow-2xl'>{film.original_language}</p>
                                <div className='flex items-center font-bold text-white opacity-80 rounded-xl px-4 bg-cyan-600 text-xs'>{film.vote_average}</div>
                            </div>
                            <div className="absolute flex bottom-0 flex-col w-full px-3 bg-gradient-to-t from-slate-950">
                                {/* title and original title*/}
                                <div className="flex-col">
                                    <h3 className="text-land-gray font-bold font-montserrat">{film.title}</h3>
                                </div>
                                {/* year and popularity */}
                                <div className="flex justify-between text-sm mb-4 mt-2">
                                    <span className="text-xs text-land-gray">{film.release_date}</span>
                                    <span className="text-xs text-yellow-500">{film.popularity}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Pagination genreName={props.genre_name}/>
        </div>
    </>
  )
}

export default LeftSideForFilms