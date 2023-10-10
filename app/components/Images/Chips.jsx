"use client"
import React, { useState, useEffect } from 'react'
import SkeletonCard from './SkeletonCard'
import ImagesCard from './Images'

const Chips = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [slug, setSlug] = useState('')

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    try {
      const data = await fetch(`https://api.unsplash.com/topics/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API}`)
      const res = await data.json()
      setCategories(res)
      setLoading(false)
    }
    catch (e) {
      console.log(e)
    }
  }

  const getSlug = (catSlug) => {
    setSlug(catSlug);
  }


  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 ">Trusted by Open Source, enterprise, and more than 99,000 of you</h2>
      </div> */}

        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 gap-3 lg:gap-6">
          {
            loading ? (
              <SkeletonCard />
            ) : (
              categories.map(function (cat) {
                return (
                  <button key={cat.id} className='p-4 md:p-7 bg-gray-100 rounded-lg shadow-lg' onClick={() => getSlug(cat.slug)}>
                    <h4> {cat.title} ({cat.total_photos}) </h4>
                  </button>
                )
              })
            )
          }
        </div>
      </div>
      <ImagesCard slug={slug} />
    </>
  )
}

export default Chips