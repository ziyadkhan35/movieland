import { useRouter } from 'next/router'
import React from 'react'

const Pagination = (props) => {
  const router = useRouter()
  const paginationButtons = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <div className="flex justify-end mt-10 mb-2">
      {
        paginationButtons.map((btn, index) => <button onClick={()=>router.push(`/pagination/${props.genreName}/${btn}`)} key={index} className='py-1 px-3 bg-gray-200 text-black font-barlow me-2 rounded-sm hover:bg-gray-400 transition duration-150'>{btn}</button>)
      }
      </div>
    </>
  )
}

export default Pagination