import React from 'react'

const Login = () => {
  return (
    <React.Fragment>
      <div className='container grid'>
        <div>
          <input type="text" name='email' id='emailField' placeholder='email' />
        </div>
        <div className='grid md:grid-col-2 lg:grid-col-2'>
          <div>
            <input type="text" name='first_name' id='firstNameField' placeholder='first_name' />
          </div>
          <div>
            <input type="text" name='last_name' id='lastNameField' placeholder='last_name' />
          </div>
        </div>
        <div>
          <input type="password" name='password' id='passwordField' placeholder='password' />
        </div>
        <div>
          <input type="password" name='password2' id='password2Field' placeholder='Re-enter password' />
        </div>
        <div>
          <p>already have an account?</p>
          <button>Signup</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login