import React from 'react'

const SkeletonCard = () => {
  let cards = Array(10).fill(0);
  return (
    <>
      {
        cards.map(function (cat) {
          return (
            <div key={cat.id} className='p-4 md:p-7 bg-gray-100 rounded-lg shadow-lg h-22 w-full animate-pulse'>
            </div>
          )
        })
      }
    </>

  )
}

export default SkeletonCard