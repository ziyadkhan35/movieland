import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import Link from 'next/link'

const Header = () => {

  // For Responsive Menu
  const responsiveNavbar = useRef()
  const genres = useRef()

  const toggleBar = (element) => {
    element.current.classList.toggle('hidden')
  }

  const router = useRouter()
  const [search, setSearch] = useState()
  
  const searchMovie = (evt) => {
    if (evt.key == 'Enter'){
      router.push(`/search/${search}`)
    }
  }

  return (
    <>
      <header className='bg-land-black fixed top-0 w-full z-10'>
        {/* Header Container */}
        <div className="flex items-center justify-between py-6 space-x-8 px-10 xl:px-32">
          {/* Logo */}
          <div className="flex items-center">
            <i class="fa-solid fa-film text-xl text-land-cyan me-3"></i>
            <a href="/" className='font-barlow uppercase text-land-cyan font-bold text-xl '>Movieland</a>
          </div>
          {/* Navigation */}
          <nav className='hidden lg:flex flex-1 items-center justify-end space-x-8'>
            {/* Menu */}
            <div className="font-serif uppercase space-x-12 flex items-center font-bold">
              <Link href="/" className="text-sm font-bebas text-land-gray hover:text-land-cyan transition duration-300">Home</Link>
              <Link href={'/top-rated'} className="text-sm font-bebas text-land-gray hover:text-land-cyan transition duration-300">Top Rated</Link>
              <Link href={'/popular'} className="text-sm font-bebas text-land-gray hover:text-land-cyan transition duration-300">Popular</Link>
              <Link href="#footer" className="text-sm font-bebas text-land-gray hover:text-land-cyan transition duration-300">About</Link>
            </div>
            {/* Search */}
              <div className="group transition duration-1000">
                <input onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie} placeholder='Type something' className='translate-x-7 group-hover:translate-x-0 bg-gray-600 outline-none text-land-gray transition duration-500 px-2 rounded-sm' type="text" />
                <button onClick={()=>router.push(`/search/${search}`)} className='bg-transparent'><i class="fa fa-search px-2 text-land-cyan" aria-hidden="true"></i></button>
              </div>
          </nav>
          {/* Menu Bar Button */}
          <button className='block lg:hidden text-white' onClick={() => toggleBar(responsiveNavbar)}><i class="fa-solid fa-bars"></i></button>
        </div>
        {/* Responsive Menu */}
        <nav ref={responsiveNavbar} className='hidden mb-2'>
          <div className="font-serif uppercase flex flex-col space-y-3 ps-10 font-bold">
            <Link href="/" className="text-sm font-bebas text-land-gray hover:text-land-cyan transition duration-300">Home</Link>
            <Link href={'/top-rated'} className="text-sm font-bebas text-land-gray hover:text-land-cyan transition duration-300">Top Rated</Link>
            <Link href={'/popular'} className="text-sm font-bebas text-land-gray hover:text-land-cyan transition duration-300">Popular</Link>
            <Link href="#footer" className="text-sm font-bebas text-land-gray hover:text-land-cyan transition duration-300">About</Link>
            {/* Genres */}
            <div onClick={() => toggleBar(genres)} className='flex items-center text-land-gray text-sm font-bebas bg-transparent w-1/12'>Genres<i class="fa-solid fa-angle-right ms-2 text-land-cyan"></i></div>
            <div ref={genres} className="grid grid-cols-2 hidden font-bebas tracking-wide">
              <Link href={'/genres/action'} className="col-span-1 text-land-gray p-2 cursor-pointer text-xs">Action Movies</Link>
              <Link href={'/genres/adventure'} className="col-span-1 text-land-gray p-2 cursor-pointer text-xs">Adventure Movies</Link>
              <Link href={'/genres/animation'} className="col-span-1 text-land-gray p-2 cursor-pointer text-xs">Animation Movies</Link>
              <Link href={'/genres/comedy'} className="col-span-1 text-land-gray p-2 cursor-pointer text-xs">Comedy Movies</Link>
              <Link href={'/genres/crime'} className="col-span-1 text-land-gray p-2 cursor-pointer text-xs">Crime Movies</Link>
              <Link href={'/genres/documentary'} className="col-span-1 text-land-gray p-2 cursor-pointer text-xs">Documentary Movies</Link>
              <Link href={'/genres/drama'} className="col-span-1 text-land-gray p-2 cursor-pointer text-xs">Drama Movies</Link>
              <Link href={'/genres/family'} className="col-span-1 text-land-gray p-2 cursor-pointer text-xs">Family Movies</Link>
            </div>
          </div>
        </nav>
          

      </header>
      {/* Search Area for Responsive */}
      <div className="flex justify-center mt-20 lg:hidden">
        <div className="w-11/12 flex justify-center">
          <input onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie} placeholder='Type something' className='bg-gray-600 outline-none text-land-gray px-2 py-1 rounded-s w-11/12' type="text" />
          <button onClick={()=>router.push(`/search/${search}`)} className='text-land-gray rounded-e bg-gray-600'><i class="fa fa-search px-2" aria-hidden="true"></i></button>
        </div>
      </div>
    </>
  )
}

export default Header