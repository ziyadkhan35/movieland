import React from 'react'

const Comments = () => {
    const comments =[
        {
            movieName: 'Joyland',
            comment: 'It was a very successful and enjoyable movie. I strongly recommend you to watch it and have it watched. Thank you',
            author: 'Artur'
        },
        {
            movieName: 'Joyland',
            comment: 'It was a very successful and wonderful movie. Thank you to everyone who contributed and I highly recommend it. Be sure to watch and watch',
            author: 'Leo'
        },
        {
            movieName: 'The Kill Room',
            comment: 'A very successful and meaningful movie, I recommend it to everyone.',
            author: 'George'
        },
        {
            movieName: 'Strays',
            comment: 'I recommend you to watch good movies',
            author: 'Harry'
        }

    ]
  return (
    <>
        <div className="flex flex-col mt-10">
            {/* Header */}
            <h1 className='text-white text-2xl font-bold font-gemunu'>Last Comments</h1>
            {
                comments.map((comment) => (
                    <div className='flex flex-col mt-4'>
                    {/* Comment Cont. */}
                    <div className="flex flex-col border-b-2 border-white border-opacity-20">
                        {/* Movie Name */}
                        <h4 className='text-gray-100 font-bold mb-1 text-sm'>{comment.movieName}</h4>
                        {/* Comment */}
                        <p className='text-gray-300 text-sm mb-1'>{comment.comment}</p>
                        {/* User Name */}
                        <div className='mb-2'>
                            <span className='bg-land-cyan px-2 font-bold rounded-sm text-xs text-black tracking-wide'>{comment.author}</span>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    </>
  )
}

export default Comments