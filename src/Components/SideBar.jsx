import React from 'react'
import { Dashboard, business, customer, setting } from '../data/dummy'

const SideBar = () => {
  console.log(customer)
  return (
    <div className=' w-[25%] px-4 py-9 hover:overflow-y-scroll overflow-y-hidden h-[100vh]'>
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
          <div>
            <h1 className='text-3xl mx-3  text-slate-500 font-medium '>
              {customers.title}
            </h1>
            <div
              className='flex justify-start items-center gap-4 rounded-md cursor-pointer hover:bg-primary4 py-3  px-3 '
              key={Index}
            >
              <img src={customers.icon} alt='' className='w-6' />{' '}
              <h1 className='uppercase text-slate-600'> {customers.name}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-[16px] mt-10'>
        {business.map((business, Index) => (
          <div>
            <h1 className='text-2xl mx-3  text-slate-500 font-medium '>
              {business.title}
            </h1>
            <div
              className='flex justify-start items-center gap-4 rounded-md cursor-pointer hover:bg-primary4 py-3  px-3 '
              key={Index}
            >
              <img src={business.icon} alt='' className='w-6' />{' '}
              <h1 className='uppercase text-slate-600'> {business.name}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-[16px] mt-10'>
        {setting.map((settings, Index) => (
          <div>
            <h1 className='text-2xl mx-3  text-slate-500 font-medium '>
              {settings.title}
            </h1>
            <div
              className='flex justify-start items-center gap-4 rounded-md cursor-pointer hover:bg-primary4 py-3  px-3 '
              key={Index}
            >
              <img src={settings.icon} alt='' className='w-6' />{' '}
              <h1 className='uppercase text-slate-600'> {settings.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
