import React from 'react'
import login from '../../assets/images/login.jpg'
import LoginForm from './LoginForm'

function Login() {
  return (
    <div className='w-full min-h-screen bg-slate-200 flex flex-col   lg:flex-row items-center justify-center gap-14 md:p-24 p-4  overflow-x-hidden '>
      <img src={login} className='md:h-[450px] w-auto mix-blend-darken h-[250px]' />
      <div className='lg:w-[40%] w-full m-auto lg:mt-0 mt-[-85px]'>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
