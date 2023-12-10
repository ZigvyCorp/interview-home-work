import UserItem from '../UserItem'
import { useSelector } from 'react-redux'
import { Skeleton, Typography } from 'antd'
import { selectUserList, selectUserLoading } from '../../../redux/reducer/userReducer'


const { Title } = Typography;

const UserList = () => {
    const users = useSelector(selectUserList)
    const loading = useSelector(selectUserLoading)

    return (
        <div className='shadow-lg border border-gray-400 p-4 rounded-lg bg-white'>
            {loading ? <Skeleton active/>
                :
                <div>
                    <Title  level={5}>Suggest user</Title>
                    {users.map(user => <UserItem key={user.userId} {...user}/>)}
                </div>

            }
        </div>
    )
}

export default UserList
