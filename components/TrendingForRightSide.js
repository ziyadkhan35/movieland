import { useRouter } from 'next/router'
import React from 'react'

const TrendingForRightSide = () => {
    const router = useRouter()
    const movies = [
        {
            imgURL: 'https://image.tmdb.org/t/p/w500/mRmRE4RknbL7qKALWQDz64hWKPa.jpg',
            movieName: 'The Killer',
            language: 'English',
            id: 800158,
        },
        {
            imgURL: 'https://image.tmdb.org/t/p/w500/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
            movieName: 'Oppenheimer',
            language: 'English',
            id: 872585,
        },
        {
            imgURL: 'https://image.tmdb.org/t/p/w500/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg',
            movieName: 'The Marvels',
            language: 'English',
            id: 609681,
        },
        {
            imgURL: 'https://image.tmdb.org/t/p/w500/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
            movieName: 'Avengers: Endgame',
            language: 'English',
            id: 299534,
        },
    ]
  return (
    <>
        <div className="flex flex-col">
            <div className="flex items-end text-land-cyan mb-6">
                <i class="fa-solid fa-film text-xl me-3 mb-0.5"></i>
                <h3 className='text-white text-2xl font-bold font-gemunu mt-2'>Trending Movies</h3>
            </div>
            {/* Trend Container */}
            <div className="flex flex-col space-y-4">
                {
                    movies.map((movie)=>(
                        <div className="flex bg-gray-400 p-1 rounded-md hover:scale-105 transition duration-300 cursor-pointer" style={{backgroundColor:'#2D5F6A'}} onClick={()=>router.push(`/movie/${movie.id}`)} key={movie.id}>
                            <img className='rounded-full w-16 h-16' src={`${movie.imgURL}`} alt="" />
                            <div className="flex flex-col w-4/5 justify-center ml-4 pl-2">
                                <h4 className='mb-1 font-bold text-yellow-50'>{movie.movieName}</h4>
                                <p className='text-yellow-50'>{movie.language}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default TrendingForRightSide