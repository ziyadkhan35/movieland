import LeftSideForFilms from '@/components/LeftSideForFilms';
import RightSideForFilms from '@/components/RightSideForFilms';
import React from 'react'

const topRated = ({ data }) => {
  return (
    <>
      <div className="px-10 xl:px-32 mt-20">
        <div className="flex mt-16 opacity-90 rounded-md" style={{backgroundColor:'#12323F'}}>
          <LeftSideForFilms data={data.results.slice(1, 16)} genre_name={'top-rated'} header={'Top Rated Movies'}/>
          <RightSideForFilms />
        </div>
      </div>
    </>
  )
}

export default topRated
export const getServerSideProps = async () => {
  const req = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&sort_by=vote_average.desc')
  const data = await req.json()

  return{ props:{ data } }
}