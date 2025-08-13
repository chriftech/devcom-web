import React from 'react'

const Login = () => {
  return (
      <div className="w-full flex justify-center py-10 border items-center">
        <div className='grid gap-3 border rounded-md p-2 w-[95%] md:lg:w-[25%]'>
          <div className='flex justify-center'>
          <p className='text-[16pt] font-bold text-gray-600'>Login</p>
          </div>
          <div>
            <input className="w-full border border-gray-300 px-2 py-1 text-gray-700  " type="text" name='email' id='emailField' placeholder='Email address' />
          </div>
          <div>
            <input className="w-full border border-gray-300 px-2 py-1 text-gray-700  " type="password" name='password' id='passwordField' placeholder='password' />
          </div>
          
          <div className='flex justify-center w-full -mt-1'>
            <button className='bg-blue-500 text-white w-full py-1 font-semibold'>Login</button>
          </div>
          <div className='flex gap-2 justify-between'>
            <a href='/signup' className='text-blue-500 text-[10pt]'>Signup</a>
            <a href='#/forgot-password' className='text-blue-500 text-[10pt]'>Forgot password?</a>
          </div>
        </div>
      </div>
  )
}

export default Login