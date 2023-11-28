import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Comments from './Comments'
import TrendingForRightSide from './TrendingForRightSide'
import FilmGenreLinks from './FilmGenreLinks'

const RightSideForFilms = () => {
    const router = useRouter()
    const [language, setLanguage] = useState('')
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState('')
    const [average, setAverage] = useState('')
  return (
    <>
        <div className="hidden lg:flex basis-1/3 py-3 px-5 border-l-4 border-gray-500 border-opacity-20">
            <div className="flex flex-col">
                {/* Trending Movies */}
                <TrendingForRightSide />
                {/* Filters */}
                <div className="flex flex-col mt-10">
                    <div className="flex items-end text-land-cyan mb-1">
                        <i class="fa-solid fa-film text-xl me-3 mb-0.5"></i>
                        <h3 className='text-white text-2xl font-bold font-gemunu mt-2'>Filters</h3>
                    </div>
                    <div className="flex flex-col">
                        <p className='text-xs my-2 text-yellow-50'>You do not need to select all of the options.</p>
                        <select onChange={(e)=>setLanguage(e.target.value)} name="option" id="movieStyle" className='outline-none rounded-md p-2 mb-2 text-yellow-50' style={{backgroundColor:'#2D5F6A'}}>
                            <option selected>Language</option>
                            <option value="tr">Turkish</option>
                            <option value="en">English</option>
                            <option value="uk">Ukraine</option>
                            <option value="fr">French</option>
                            <option value="ja">Japanese</option>
                            <option value="hi">India</option>
                            <option value="nl">Dutch</option>
                            <option value="it">Italian</option>
                            <option value="th">Thai</option>
                        </select>
                        <select onChange={(e)=>setGenre(e.target.value)} id="movieGenre" className='outline-none rounded-md p-2 mb-2 text-yellow-50' style={{backgroundColor:'#2D5F6A'}}>
                            <option selected>Movie Genre</option>
                            <option value="28">Action Movies</option>
                            <option value="12">Adventure Movies</option>
                            <option value="16">Animation Movies</option>
                            <option value="35">Comedy Movies</option>
                            <option value="80">Crime Movies</option>
                            <option value="99">Documentary Movies</option>
                            <option value="18">Drama Movies</option>
                            <option value="10751">Family Movies</option>
                        </select>
                        <select onChange={(e)=>setYear(e.target.value)} id="movieYear" className='outline-none rounded-md p-2 mb-2 text-yellow-50' style={{backgroundColor:'#2D5F6A'}}>
                            <option selected>Year Range</option>
                            <option value="2023">2023 - 2013</option>
                            <option value="2012">2012 - 2002</option>
                            <option value="2001">2001 - 1991</option>
                            <option value="1990">1990 - 1980</option>
                            <option value="1979">1979 - 1969</option>
                            <option value="1968">1968 - 1958</option>
                        </select>
                        <select onChange={(e)=>setAverage(e.target.value)} id="imdbScore" className='outline-none rounded-md p-2 mb-2 text-yellow-50' style={{backgroundColor:'#2D5F6A'}}>
                            <option selected>Vote Averege</option>
                            <option value="9">9 and above</option>
                            <option value="8">8 and above</option>
                            <option value="7">7 and above</option>
                            <option value="6">6 and above</option>
                            <option value="5">5 and above</option>
                        </select>
                        {/* Buttons */}
                        <div className="flex justify-center mt-2">
                            <button onClick={()=>router.push(`/filters/with_original_language=${language}/primary_release_date.gte=${year.length>1?year-10:''}/primary_release_date.lte=${year}/vote_average.gte=${average}/with_genres=${genre}`)} className='bg-gray-200 rounded-md p-2 me-6 font-bebas font-bold text-gray-800'>Show Films</button>
                            <button className='bg-gray-200 rounded-md p-2 font-bebas font-bold text-gray-800'>Reset</button>
                        </div>
                    </div>
                </div>
                {/* Film Genres */}
                <FilmGenreLinks />
                {/* Comments */}
                <Comments />
            </div>
        </div>
    </>
  )
}

export default RightSideForFilms
