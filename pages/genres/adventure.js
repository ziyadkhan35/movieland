import LeftSideForFilms from '@/components/LeftSideForFilms'
import RightSideForFilms from '@/components/RightSideForFilms'
import React from 'react'

const adventure = ({ data }) => {
  return (
    <>
        <div className="px-10 xl:px-32 mt-20">
            <div className="flex mt-16 opacity-90 rounded-md" style={{backgroundColor:'#12323F'}}>
                <LeftSideForFilms data={data.results} genre_name={'adventure'} header={'Adventure Movies'}/>
                <RightSideForFilms />
            </div>
        </div>
    </>
  )
}

export default adventure
export const getServerSideProps = async () => {
    const req = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&language=pt-BR&page=1&with_genres=12')
    const data = await req.json()

    return{ props:{ data } }
}