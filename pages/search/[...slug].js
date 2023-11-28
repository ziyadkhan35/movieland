import LeftSideForFilms from '@/components/LeftSideForFilms';
import RightSideForFilms from '@/components/RightSideForFilms';
import { useRouter } from 'next/router'
import React from 'react'

const search = ({ data }) => {
  const router = useRouter()
  return (
    <>
      <div className="mx-10 xl:mx-32">
        <div className="flex mt-16 opacity-90 rounded-md" style={{backgroundColor:'#12323F'}}>
          <LeftSideForFilms data={data.results} genre_name={`search/${router.query.slug}`} header={`${router.query.slug}`}/>
          <RightSideForFilms />
        </div>
      </div>
    </>
  )
}

export default search
export const getServerSideProps = async (context) => {
  const req = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=492ffd09fc56b252b897b973c6f119c6&query=${context.params.slug}`)
  const data = await req.json()

  return { props: { data } }
}