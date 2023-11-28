import LeftSideForFilms from '@/components/LeftSideForFilms'
import RightSideForFilms from '@/components/RightSideForFilms'
import { useRouter } from 'next/router'
import React from 'react'

const filters = ({data}) => {
    const router = useRouter()
  return (
    <>
      <div className="px-10 xl:px-32 mt-20">
        <div className="flex mt-16 opacity-90 rounded-md" style={{backgroundColor:'#12323F'}}>
          <LeftSideForFilms data={data.results} genre_name={`filters/${router.query.slug[0]}/${router.query.slug[1]}/${router.query.slug[2]}/${router.query.slug[3]}/${router.query.slug[4]}`}/>
          <RightSideForFilms />
        </div>
      </div>
    </>
  )
}

export default filters

export const getServerSideProps = async (context) => {
  const req = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=492ffd09fc56b252b897b973c6f119c6&${context.params.slug[0]}&sort_by=popularity.desc&${context.params.slug[1]}&${context.params.slug[2]}&${context.params.slug[3]}&${context.params.slug[4]}&page=${context.params.slug[5]}`)
  const data = await req.json()

  return { props: { data } }
}