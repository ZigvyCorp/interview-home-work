import { Button } from 'antd'

const UserItem = ({name}: { name: string}) => {
  return (
    <div className='flex justify-between items-center my-3'>
        <p>{name}</p>
        <Button className='bg-[#001529] text-white'>Follow</Button>
    </div>
  )
}

export default UserItem