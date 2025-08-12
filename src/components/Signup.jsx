import React from 'react'

const Signup = () => {
  return (
    <React.Fragment>
      <div className='container grid'>
        <div>
          <input type="text" name='email' id='emailField' placeholder='email' />
        </div>
        <div>
          <input type="password" name='password' id='passwordField' placeholder='password' />
        </div>=
        <div>
          <p>already have an account?</p>
          <button>Login</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Signup