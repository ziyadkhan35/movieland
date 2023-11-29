import { useRouter } from 'next/navigation';
import React, { useLayoutEffect, useRef, useState } from 'react'

const TrendSlider = (movies) => {

  const router = useRouter()
  const div = useRef(), img = useRef() 
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(img.current.clientWidth);
  }, []);

  const carousel = div.current, imgWidth = width
  const rightMovie = () => {
    carousel.scrollLeft += imgWidth
  }
  const leftMovie = () => {
    carousel.scrollLeft += -imgWidth
  }

  return (
    <>
      <div className="flex flex-col mt-10 sm:mx-10 xl:mx-20">
        <h2 className='text-yellow-50 ms-10 lg:ms-20 text-3xl mb-6 font-mono tracking-wide font-bold'><i class="fa-solid fa-arrow-trend-up me-4 text-land-cyan"></i>Trends</h2>
    
        <section className="flex justify-center">
          <div className="wrapper max-w-7xl relative px-10">
            
            <div ref={div} className="carousel container flex flex-nowrap space-x-4 overflow-hidden scroll-smooth">   
              {
                movies.data.map((movie) => (
                  <img ref={img} className="h-64 w-2/3 relative cursor-pointer hover:opacity-80" key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} draggable="false" alt="" onClick={()=>router.push(`/movie/${movie.id}`)}/> 
                ))
              }
            </div>
            <i id="right" onClick={rightMovie} className="fa-solid fa-angle-right w-10 h-10 top-1/2 text-center rounded-full right-[1rem] bg-land-cyan absolute -translate-y-1/2 text-white cursor-pointer" style={{lineHeight: '2.5rem'}}></i>
            <i id="left" onClick={leftMovie} className="fa-solid  fa-angle-left w-10 h-10 top-1/2  text-center rounded-full left-[1rem] bg-land-cyan absolute -translate-y-1/2 text-white cursor-pointer" style={{lineHeight: '2.5rem'}}></i>
          </div>
        </section>

      </div>
    </>
  )
}

export default TrendSlider
