import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import axios from 'axios'
import {
  active,
  filter,
  loans,
  nextbtn,
  prevbtn,
  saving,
  usersdata
} from '../../assets/Icons/Index'
import ReactPaginate from 'react-paginate'

const Users = () => {
  const [users, setUsers] = useState([])
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  const start = currentPage * itemsPerPage
  const end = start + itemsPerPage
  const usersdatas = users.slice(start, end)




  const FetchData = async () => {
    const response = await axios.get(
      'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
    )
    setUsers(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    FetchData()
  }, [])

  return (
    <div className='flex bg-slate-200 '>
      <SideBar />

      <div className='flex flex-col px-4  w-[90%]'>
        <h1 className='text-3xl mx-[20px] my-11'>Users</h1>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 my-5'>
          <div className='bg-white  h-[20vh] px-10 py-4'>
            <div className='p-3 bg-[#fce8ff] w-[50px] rounded-full'>
              <img src={loans} alt='' className='w-20' />
            </div>
            <h2 className='text-xl my-3'>Users</h2>
            <p className='text-xl my-3'>2,453</p>
          </div>
          <div className='bg-white  h-[20vh] px-10 py-4'>
            <div className='p-3 bg-[#eee8ff] w-[50px] rounded-full'>
              <img src={saving} alt='' className='w-20' />
            </div>
            <h2 className='text-xl my-3'>Active Users</h2>
            <p className='text-xl my-3 '>2,453</p>
          </div>
          <div className='bg-white  h-[20vh] px-10 py-4'>
            <div className='p-3 bg-[#feefec] w-[50px] rounded-full'>
              <img src={active} alt='' className='w-20' />
            </div>
            <h2 className='text-xl my-3'>Users with Loans</h2>
            <p className='text-xl my-3 '>12,453</p>
          </div>
          <div className='bg-white  h-[20vh] px-10 py-4'>
            <div className='p-3 bg-[#ffebf0] w-[50px] rounded-full'>
              <img src={usersdata} alt='' className='W-20' />
            </div>
            <h2 className='text-xl my-3'>Users with Savings</h2>
            <p className='text-xl my-3 '>102,453</p>
          </div>
        </div>

        <table className='table-auto '>
          <thead className='bg-white  '>
            <tr className=' '>
              <th className='border p-2'>
                <p className='flex gap-2'>
                  {' '}
                  ORGANIZATION <img src={filter} alt='' />
                </p>
              </th>
              <th className='border p-2 '>
                <p className='flex gap-2'>
                  USERNAME <img src={filter} alt='' />
                </p>
              </th>
              <th className='border p-2 '>
                <p className='flex gap-2 '>
                  EMAIL <img src={filter} alt='' />
                </p>
              </th>
              <th className='border p-2 '>
                {' '}
                <p className='flex gap-2'>
                  NUMBER <img src={filter} alt='' />
                </p>
              </th>
              <th className='border p-2 '>
                {' '}
                <p className='flex gap-2'>
                  DATE JOINED <img src={filter} alt='' />
                </p>
              </th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {usersdatas.map((user, index) => (
              <tr key={index}>
                <td className='border p-3'>{user.orgName}</td>
                <td className='border p-3'>{user.userName}</td>
                <td className='border p-3'>{user.email}</td>
                <td className='border p-3'>{user.phoneNumber}</td>
                <td className='border p-3'>{user.lastActiveDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center'>
            <h1>showing  </h1>
            <p className=' px-2 w-[110%] bg-slate-300 flex mx-3 py-2 rounded-md '>{itemsPerPage} <img src={nextbtn} alt='' className='w-[50%] ml-6 rotate-90' /></p>
            <p className='w-[130%]'>out of {users.length}</p>
          </div>

          <ReactPaginate
            pageCount={Math.ceil(users.length / itemsPerPage)}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName='flex justify-end my-6'
            activeClassName='bg-blue-500 text-white rounded-sm'
            pageClassName='mx-3'
            pageLinkClassName='bg-white text-blue-500 border border-blue-500 rounded-md px-[7px] py-1'
            breakClassName={'mx-2 text-gray-500'}
            previousLabel={
              <img src={prevbtn} alt='' className='w-[50%] mx-3' />
            }
            nextLabel={<img src={nextbtn} alt='' className='w-[50%] mx-3' />}
          />
        </div>
      </div>
    </div>
  )
}

export default Users
