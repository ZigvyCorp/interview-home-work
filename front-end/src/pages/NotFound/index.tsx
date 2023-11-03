import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='absolute m-auto -translate-y-1/2 flex-center top-1/2'>
      <div className='flex flex-col items-center'>
        <span className='text-[164px] font-bold'>404</span>
        <span className='text-[42px]'>Page Not Found</span>
        <Button className='font-semibold text-white bg-primary text-[18px] h-[45px] w-[300px] mt-4 hover:!border-black hover:!text-black'>
          <Link to='/' className='hover:text-black'>Go Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound