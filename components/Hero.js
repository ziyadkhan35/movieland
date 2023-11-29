import { useRouter } from 'next/router'
import React from 'react'

const Hero = () => {
    const router = useRouter()
  return (
    <>
        <section className='group h-128 flex relative flex-col items-center mt-2 lg:mt-10'>
            {/* Base Movie Image */}
            <img className='object-cover w-full h-full bg-gradient-to-t from-black opacity-90' src="https://wallpapers.com/images/hd/the-witcher-hanged-man-s-tree-kd3hrv4iup4xrtei.webp" alt="movie" />
            {/* Movie Content */}
            <div className="absolute flex flex-col items-center bottom-24 md:bottom-20 lg:bottom-12 text-land-gray">
            {/* Addition Informations */}
            <div className="flex font-mono mb-6">
                {/* rating */}
                <div className="me-6 flex items-center">
                <i class="fa-regular fa-star text-land-cyan text-lg"></i>
                <span className='ms-1 text-sm'>IMDB: <span className='font-bold text-sm'>7.4</span></span>
                </div>
                {/* duraion */}
                <div className="me-6 flex items-center">
                <i class="fa-regular fa-clock text-land-cyan text-lg"></i>
                <span className='ms-1 text-sm'>Duration: <span className='font-bold text-sm'>1H 44M</span></span>
                </div>
                {/* year */}
                <div className="flex items-center">
                <i class="fa-regular fa-calendar-days text-land-cyan text-lg"></i>
                <span className='ms-1 text-sm'>Year: <span className='font-bold text-sm'>2023</span></span>
                </div>
            </div>
            <div className="flex items-center justify-start flex-col">
                {/* Header */}
                <div className='flex flex-col sm:flex-row items-center sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold sm:font-extrabold drop-shadow-xl'>
                    <span className='me-2 lg:me-4'>The</span>
                    <span className='text-land-cyan me-1 lg:me-2 font-extrabold text-xl sm:text-3xl md:text-4xl lg:text-5xl'>Witcher</span>
                    <span className='me-2 lg:me-4 hidden sm:inline'>:</span>
                    <span className='tracking-tighter'>Nightmare of the Wolf</span>
                </div>
                {/* Content */}
                <p className='mb-8 w-2/3 text-center mt-6 text-xs md:text-sm sm:font-bold font-barlow drop-shadow-lg text-gray-200'>
                Escaping from poverty to become a witcher, Vesemir slays monsters for coin and glory, but when a new menace rises, he must face the demons of his past.
                </p>
                {/* Watch */}
                <div className="flex mb-10 flex-col sm:flex-row justify-center">
                <button className="px-6 py-2 bg-land-cyan rounded-xl font-mono font-bold sm:me-6 mb-2 sm:mb-0 text-black hover:bg-land-cyan-hover" onClick={()=>router.push(`/movie/${753342}`)}>Watch</button>
                <button className="px-6 py-2 bg-black rounded-xl font-bold font-mono hover:bg-gray-900"><a href="#films">See more</a></button>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Hero