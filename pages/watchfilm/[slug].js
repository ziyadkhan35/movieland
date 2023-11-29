import LeftSideForFilms from '@/components/LeftSideForFilms';
import RightSideForFilms from '@/components/RightSideForFilms';
import { useRouter } from 'next/router';
import React from 'react'

const filmType = ({ results }) => {
    const router = useRouter()
    console.log(router);
  return (
    <>
        <div className="sm:mx-10 xl:px-32 mt-20">
          <div className="flex mt-16 opacity-90 rounded-md" style={{backgroundColor:'#12323F'}}>
            <LeftSideForFilms data={results} forLink='watchfilm'/>
            <RightSideForFilms />
          </div>
        </div>
    </>
  )
}

 
export const getServerSideProps = async (context) => {
    
  const res = await fetch(`https://api.themoviedb.org/3/movie/${context.params.slug}?language=en-US&page=1s&api_key=492ffd09fc56b252b897b973c6f119c6`)
  const list = await res.json()
  const results = list.results

  // const movie = movies.find((m)=> m.id === Number(context.params.id))

  return{ props:{ results } }
}

export default filmType