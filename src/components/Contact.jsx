import React from 'react'

const Contact = ({text}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <p className='text-3xl font-semibold'>{text}</p>
      <button className="bg-black text-white px-6 py-2 text-sm rounded-md hover:bg-transparent hover:text-black border border-black hover:border-black transition-all duration-300">
          CONTACT
        </button>
    </div>
  )
}

export default Contact
