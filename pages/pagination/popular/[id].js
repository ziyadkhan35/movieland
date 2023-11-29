import LeftSideForFilms from '@/components/LeftSideForFilms'
import RightSideForFilms from '@/components/RightSideForFilms'
import React from 'react'

const Popular = ({movies}) => {
  return (
    <div className="sm:mx-10 px-32 mt-20">
      <div className="flex mt-16 opacity-90 rounded-md" style={{backgroundColor:'#12323F'}}>
        <LeftSideForFilms data={movies.results.slice(1, 16)} genre_name={'popular'} header={'Popular Movies'}/>
        <RightSideForFilms />
      </div>
    </div>
  )
}

export default Popular
export const getServerSideProps = async(context) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=492ffd09fc56b252b897b973c6f119c6&page=${context.params.id}`)
    const data = await res.json()

    return { props: {movies: data} }
}