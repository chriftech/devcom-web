import React from 'react'

const Pricing = () => {
  return (
    <div className='w-screen h-screen p-2'>
      <div className="flex justify-center items h-full">
        <div className="grid md:lg:grid-cols-3 gap-3">
          <div className='border p-3 rounded-md'>
          <div className='grid gap-3 justify-start'>
            <p className='font-semibold'>Free</p>
            <div className="flex gap-1">
              <p className='text-gray-800 font-bold text-[16pt]'>$0.00</p>
              <p className='text-gray-600 text-[13pt] font-semibold'>/month</p>
            </div>
          </div>
          </div>
          <div className='border p-3 rounded-md'>

          </div>
          <div className='border p-3 rounded-md'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
