import React, { useState } from 'react'
import { Dashboard, business, customer, setting } from '../data/dummy'

const SideBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <div>
      <div
        className=' mt-5 ml-3 block space-y-1 cursor-pointer'
        onClick={handleMenuClick}
      >
        <div
          className={`w-[20px] h-[2px] bg-black transition-all ${
            toggleMenu ? 'rotate-45 translate-y-[10px]' : ''
          }`}
        ></div>
        <div
          className={`w-[20px] h-[2px] bg-black transition-all ${
            toggleMenu ? 'hidden' : ''
          }`}
        ></div>
        <div
          className={`w-[20px] h-[2px] bg-black transition-all ${
            toggleMenu ? '-rotate-45 translate-y-1' : ''
          }`}
        ></div>
      </div>

     
        <div className=' w-[140%] px-4 py-9 hover:overflow-y-scroll overflow-y-hidden h-[100vh]'>
          {Dashboard.map((Dashboard, Index) => (
            <div
              className='flex justify-start items-center gap-4 rounded-md cursor-pointer hover:bg-primary4 py-3 px-3 '
              key={Index}
            >
              <img src={Dashboard.icon} alt='' className='w-6' />{' '}
              <h1 className='uppercase'> {Dashboard.name}</h1>
            </div>
          ))}

          <div className='flex flex-col gap-[16px] mt-10'>
            {customer.map((customers, Index) => (
              <div key={Index}>
                <h1 className='text-3xl mx-3  text-slate-500 font-medium '>
                  {customers.title}
                </h1>
                <div className='flex justify-start items-center gap-4 rounded-md cursor-pointer hover:bg-primary4 py-3  px-3 '>
                  <img src={customers.icon} alt='' className='w-6' />{' '}
                  <h1 className='uppercase text-slate-600 text-base'>
                    {' '}
                    {customers.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-[16px] mt-10'>
            {business.map((business, Index) => (
              <div key={Index}>
                <h1 className='text-2xl mx-3  text-slate-500 font-medium '>
                  {business.title}
                </h1>
                <div className='flex justify-start items-center gap-4 rounded-md cursor-pointer hover:bg-primary4 py-3  px-3 '>
                  <img src={business.icon} alt='' className='w-6' />{' '}
                  <h1 className='uppercase text-slate-600 text-base'>
                    {' '}
                    {business.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-[16px] mt-10'>
            {setting.map((settings, Index) => (
              <div key={Index}>
                <h1 className='text-2xl mx-3  text-slate-500 font-medium '>
                  {settings.title}
                </h1>
                <div className='flex justify-start items-center gap-4 rounded-md cursor-pointer hover:bg-primary4 py-3  px-3 '>
                  <img src={settings.icon} alt='' className='w-6' />{' '}
                  <h1 className='uppercase text-slate-600 text-base'>
                    {' '}
                    {settings.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
     
    </div>
  )
}

export default SideBar
