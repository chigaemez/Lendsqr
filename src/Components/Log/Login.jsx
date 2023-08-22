import React, { useState } from 'react'
import { banner } from '../../assets/Icons/Index'
import { Link } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-[30px] h-screen'>
      <div className=''>
        <img src={banner} alt='' className='banner' />
      </div>

      <div className='w-[70%] -ml-11 lg:w-[30%]  '>
        <div className=''>
          <div className=' detail'>
            <h2 className='text-4xl font-semibold text-slate-700'>Welcome!</h2>
            <p className='text-xl my-5'>Enter details to login.</p>
          </div>

          <div className='form'>
            <form action=''>
              <div className='form-action'>
                <input
                  type='text'
                  placeholder='Email'
                  className='w-[120%] lg:w-[115%] border-[2px] h-[40px] rounded-md px-2 outline-none'
                  autoComplete='off'
                  required
                />
              </div>

              <div className='relative  mt-1'>
                <input
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  required
                  className='w-[120%] lg:w-[115%] border-[2px] h-[40px] rounded-md outline-none mt-1 block  py-3 px-2'
                  placeholder='Password...'
                />

                <div className='absolute top-2 -right-12 inline-flex items-center'>
                  <p
                    className='text-base text-primary cursor-pointer'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    Show
                  </p>
                </div>
              </div>
              <div className='form-action'>
                <a href='#' className='text-xs my-5 text-primary'>
                  {' '}
                  FORGOT PASSWORD?
                </a>
              </div>

              <div className='form-action'>
                <Link to="/user">
                  <input
                    type='button'
                    className='w-[120%] border-[2px] lg:w-[115%] h-[40px] rounded-md bg-primary text-white'
                    value='LOG IN'
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
