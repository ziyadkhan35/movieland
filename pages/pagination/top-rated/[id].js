import LeftSideForFilms from '@/components/LeftSideForFilms'
import RightSideForFilms from '@/components/RightSideForFilms'
import React from 'react'

const topRated = ({movies}) => {
  return (
    <div className="sm:mx-10 xl:px-32 mt-20">
      <div className="flex mt-16 opacity-90 rounded-md" style={{backgroundColor:'#12323F'}}>
        <LeftSideForFilms data={movies.results.slice(1, 16)} genre_name={'top-rated'} header={'Top Rated Movies'}/>
        <RightSideForFilms />
      </div>
    </div>
  )
}

export default topRated
export const getServerSideProps = async(context) => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&sort_by=vote_average.desc&page=${context.params.id}`)
    const data = await res.json()

    return { props: {movies: data} }
  }