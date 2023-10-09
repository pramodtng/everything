/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const DashBoard = () => {
  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-12 gap-6">
        <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">

          <Link className="group relative block rounded-xl overflow-hidden" href="/images">
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1502613374390-8da7aa532177?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="Image Description" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
              <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                Images
              </div>
            </div>
          </Link>
        </div>

        <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
          <Link className="group relative block rounded-xl overflow-hidden" href="quotes">
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHF1b3Rlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Image Description" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
              <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                Quotes
              </div>
            </div>
          </Link>
        </div>

        <div className="col-span-12 md:col-span-4">
          <Link className="group relative block rounded-xl overflow-hidden" href="/blogs">
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
              <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                Blogs
              </div>
            </div>
          </Link>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <a className="group relative block rounded-xl overflow-hidden" href="#">
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Image Description" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
              <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                Data at Preline
              </div>
            </div>
          </a>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4">

          <a className="group relative block rounded-xl overflow-hidden" href="#">
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80" alt="Image Description" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
              <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                Empowered management
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DashBoard