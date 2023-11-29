import React from 'react'
import YouTube from 'react-youtube'

const MovieItem = ({movie, video, review}) => {
  
  // Key For Movie Trailer
  const trailerKey = video.videos.results.find((trailer) => trailer.name === 'Official Trailer')?.key
  const opts = { 
    height: '350',
    width: '600',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }
  return (
    <>
      {/* Container for All Items */}
      <div className="flex flex-col lg:mx-10 xl:mx-32 pb-10 mt-20 rounded-md text-gray-200" style={{backgroundColor:'#12323F'}}>
        {/* For header and imbd,language buttons */}
        <div className="flex justify-between items-center me-10">
          {/* Header */}
          <h2 className='text-4xl font-gemunu font-bold mt-6 mb-4 ms-10'>{movie?.title}</h2>
          {/* Buttons */}
          <div className="flex">
            <button className='bg-black text-cyan-400 px-4 font-bold py-1 rounded-sm me-2'>{movie?.vote_average}</button>
            <button className='bg-black text-yellow-400 px-4 font-bold py-1 rounded-sm uppercase'>{movie?.original_language}</button>
          </div>
        </div>
        {/* Movie Describe */}
        <div className="flex space-x-2 me-10 order-last md:order-none">
          {/* Image */}
          <div className="hidden md:block md:basis-1/3 ps-10 me-2">
            <img className='' src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
            <p className='bg-gray-600 mt-1 py-2 text-center rounded-md text-lg'>Watch Trailer</p>
          </div>
          {/* Content and others */}
          <div className="basis-full md:basis-2/3 mt-6 md:mt-0 ps-8 md:ps-0">
            <div className="flex flex-col">
              <p className='h-44 lg:h-64 max-h-fill overflow-y-auto mb-4 pt-2 pb-4 px-3 rounded-md' style={{backgroundColor:'#2D5F6A'}}>{review.results[0] ? review.results[0].content : 'Content Not Found'}</p>
              <table className='ms-3 font-bold font-open text-gray-400'>
                <tbody>
                  <tr>
                    <td className='w-56 py-2 text-sm lg:text-base'>Author</td>
                    <td style={{color:'#2D5F6A'}} className='text-sm lg:text-base'>: {review.results[0] ? review.results[0].author : 'Author Not Found'}</td>
                  </tr>
                  <tr>
                    <td className='py-2 text-sm lg:text-base'>Original Language</td>
                    <td style={{color:'#2D5F6A'}} className='text-sm lg:text-base'>: {movie?.original_language}</td>
                  </tr>
                  <tr>
                    <td className='py-2 text-sm lg:text-base'>Original Title</td>
                    <td style={{color:'#2D5F6A'}} className='text-sm lg:text-base'>: {movie?.original_title}</td>
                  </tr>
                  <tr>
                    <td className='py-2 text-sm lg:text-base'>Popularity</td>
                    <td style={{color:'#2D5F6A'}} className='text-sm lg:text-base'>: {movie?.popularity}</td>
                  </tr>
                  <tr>
                    <td className='py-2 text-sm lg:text-base'>Release Date</td>
                    <td style={{color:'#2D5F6A'}} className='text-sm lg:text-base'>: {movie?.release_date}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className='py-2 text-sm lg:text-base'>Vote Count</td>
                    <td style={{color:'#2D5F6A'}} className='text-sm lg:text-base'>: {movie?.vote_count}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        {/* Trailer */}
        <div className="flex flex-col justify-center mt-4 sm:mt-16 mx-10 p-4" style={{backgroundColor:'#2D5F6A'}}>
          <h3 className='text-2xl lg:text-3xl font-bold mx-56 rounded-sm mb-6 mt-2 py-1 text-gray-200 text-center font-montserrat'>Watch Trailer</h3>
          <div className="flex justify-center">
            <YouTube videoId={trailerKey} opts={opts}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieItem
export const getServerSideProps = async (context) => {
  // Upcoming API
  const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=492ffd09fc56b252b897b973c6f119c6`)
  const user = await res.json()
  // Popular
  const popular_res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1s&api_key=492ffd09fc56b252b897b973c6f119c6`)
  const popular = await popular_res.json()
  // Top Rated API
  const top_res = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1&api_key=492ffd09fc56b252b897b973c6f119c6`)
  const top = await top_res.json()
  // Action
  const action_res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&language=pt-BR&page=1&with_genres=28`)
  const action = await action_res.json()
  // Adventure
  const adventure_res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&language=pt-BR&page=1&with_genres=12`)
  const adventure = await adventure_res.json()
  // Animation
  const animation_res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&language=pt-BR&page=1&with_genres=16`)
  const animation = await animation_res.json()
  // Comedy
  const comedy_res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&language=pt-BR&page=1&with_genres=35`)
  const comedy = await comedy_res.json()
  // Crime
  const crime_res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&language=pt-BR&page=1&with_genres=80`)
  const crime = await  crime_res.json()
  // Documentary
  const documentary_res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&language=pt-BR&page=1&with_genres=99`)
  const documentary = await documentary_res.json()
  // Drama
  const drama_res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&language=pt-BR&page=1&with_genres=18`)
  const drama = await drama_res.json()
  // Family
  const family_res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&language=pt-BR&page=1&with_genres=10751`)
  const family = await family_res.json()

  const movies = user.results.concat(popular.results).concat(top.results).concat(action.results).concat(adventure.results).concat(animation.results).concat(comedy.results).concat(crime.results).concat(documentary.results).concat(drama.results).concat(family.results)
  const movie = movies.find((m)=> m.id === Number(context.params.id))

  // API for movie trailer
  const res2 = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=492ffd09fc56b252b897b973c6f119c6&append_to_response=videos`)
  const data = await res2.json()

  // Reviews
  const res3 = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}/reviews?api_key=492ffd09fc56b252b897b973c6f119c6`)
  const data3 = await res3.json()

  return{ props: { movie: movie || null, video: data, review: data3 } }
}