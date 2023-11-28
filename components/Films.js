import React from 'react'
import RightSideForFilms from './RightSideForFilms'
import LeftSideForFilms from './LeftSideForFilms'

const Films = (films) => {
  
  return (
    <div className='flex' id='films'>
        <div className="flex mt-16 mx-10 xl:mx-32 opacity-90 sm:rounded-md" id='#movies' style={{backgroundColor:'#12323F'}}>
            {/* Left Side */}
            <LeftSideForFilms forLink={'movie'} data={films.data} genre_name={'upcoming'} header={'Upcoming Movies'}/>
            {/* Right  Side */}
            <RightSideForFilms />
        </div>
    </div>
  )
}

export default Films