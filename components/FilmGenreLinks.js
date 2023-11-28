import Link from 'next/link'
import React from 'react'

const FilmGenreLinks = () => {
  return (
    <>
        <div className="flex flex-col mt-10">
          <div className="flex items-end text-land-cyan mb-4">
            <i class="fa-solid fa-film text-xl me-3 mb-0.5"></i>
            <h3 className='text-white text-2xl font-bold font-gemunu mt-2'>Film Genres</h3>
          </div>
            <div className="grid grid-cols-2 gap-2 text-yellow-50 text-sm">
                <Link href={'/genres/action'} className="col-span-1 p-2 hover:opacity-80 cursor-pointer" style={{backgroundColor:'#2D5F6A'}}>Action Movies</Link>
                <Link href={'/genres/adventure'} className="col-span-1 p-2 hover:opacity-80 cursor-pointer" style={{backgroundColor:'#2D5F6A'}}>Adventure Movies</Link>
                <Link href={'/genres/animation'} className="col-span-1 p-2 hover:opacity-80 cursor-pointer" style={{backgroundColor:'#2D5F6A'}}>Animation Movies</Link>
                <Link href={'/genres/comedy'} className="col-span-1 p-2 hover:opacity-80 cursor-pointer" style={{backgroundColor:'#2D5F6A'}}>Comedy Movies</Link>
                <Link href={'/genres/crime'} className="col-span-1 p-2 hover:opacity-80 cursor-pointer" style={{backgroundColor:'#2D5F6A'}}>Crime Movies</Link>
                <Link href={'/genres/documentary'} className="col-span-1 p-2 hover:opacity-80 cursor-pointer" style={{backgroundColor:'#2D5F6A'}}>Documentary Movies</Link>
                <Link href={'/genres/drama'} className="col-span-1 p-2 hover:opacity-80 cursor-pointer" style={{backgroundColor:'#2D5F6A'}}>Drama Movies</Link>
                <Link href={'/genres/family'} className="col-span-1 p-2 hover:opacity-80 cursor-pointer" style={{backgroundColor:'#2D5F6A'}}>Family Movies</Link>
            </div>
        </div>
    </>
  )
}

export default FilmGenreLinks