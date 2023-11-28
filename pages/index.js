import Films from '@/components/Films'
import Hero from '@/components/Hero'
import TrendSlider from '@/components/TrendSlider'
import React from 'react'

const about = ({ trends, films }) => {
  return (
    <>
      {/* Best Movie For Home Page */}
      <Hero />

      {/* Trend Slider Component */}
      <TrendSlider data={trends.results}/>

      {/* New Films Component */}
      <Films data={films.results.slice(1, 16)} />

    </>
  )
}

export default about

export const getServerSideProps = async() => {
  const res = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1&api_key=492ffd09fc56b252b897b973c6f119c6')
  const data = await res.json()

  const rep = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1s&api_key=492ffd09fc56b252b897b973c6f119c6`)
  const data2 = await rep.json()

  return { props: { trends: data, films: data2 } }
}
