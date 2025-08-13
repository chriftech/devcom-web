import React from 'react'

const Signup = () => {
  return (
      <div className="w-full flex justify-center py-10 border items-center">
        <div className='grid gap-3 border rounded-md p-2'>
          <div className='flex justify-center'>
          <p className='text-[16pt] font-bold text-gray-600'>Signup</p>
          </div>
          <div>
            <input className="w-full border border-gray-300 px-2 py-1 text-gray-700  " type="text" name='email' id='emailField' placeholder='Email address' />
          </div>
          <div className='grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div>
              <input className="border border-gray-300 px-2 py-1 text-gray-700  " type="text" name='first_name' id='firstNameField' placeholder='First name' />
            </div>
            <div>
              <input className="border border-gray-300 px-2 py-1 text-gray-700  " type="text" name='last_name' id='lastNameField' placeholder='Last name' />
            </div>
          </div>
          <div>
            <input className="w-full border border-gray-300 px-2 py-1 text-gray-700  " type="text" name='middle_name' placeholder='Middle name(optional)' />
          </div>
          <div>
            <input className="w-full border border-gray-300 px-2 py-1 text-gray-700  " type="password" name='password' id='passwordField' placeholder='password' />
          </div>
          <div>
            <input className="w-full border border-gray-300 px-2 py-1 text-gray-700  " type="password" name='password2' id='password2Field' placeholder='Re-enter password' />
          </div>
          <div className='flex justify-center w-full -mt-1'>
            <button className='bg-blue-500 text-white w-full py-1 font-semibold'>Signup</button>
          </div>
          <div className='flex gap-2 justify-center'>
            <p className='text-gray-400'>Already have an account? </p><a href='/signin' className='text-blue-500'>Login</a>
          </div>
        </div>
      </div>
  )
}

export default Signup