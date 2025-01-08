import React from 'react'
import { Link } from 'react-router-dom'

const HomeCta = () => {
  return (
    <div className='w-full h-fit mx-auto pb-10 md:px-12 relative text-white'>
        <img className='w-full h-52 rounded-lg object-fit' src="/images/cta.png" alt="" />
        <div className="w-full md:max-w-lg p-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4">
        <h1 className='text-base md:text-xl text-center'>Supercharge your business with Expert IT and HR solution</h1>
        <Link className='text-base text-center border px-4 py-2 bg-white text-[#00B8F1] rounded-full'>Contact us</Link>
        </div>
    </div>
  )
}

export default HomeCta