import React, { ChangeEvent, useEffect } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import PostList from '../../components/Post/Post'
import { useDispatch } from 'react-redux'
import { getSuggestUser } from '../../redux/actions/userActions'
import { getPosts } from '../../redux/actions/postActions'
import { Button, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'
import { SearchOutlined } from '@ant-design/icons';
import { Content, Header } from 'antd/es/layout/layout'




const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { handleChangeSearch, value } = useSearch()


  const handleSearchButtonClick = () => {
    dispatch(getPosts({ page: 1, search: value }))
    navigate(`search?title=${value}`, { replace: true });
  };
  useEffect(() => {
    dispatch(getSuggestUser())
    dispatch(getPosts({ page: 1, search: '' }))
  }, [dispatch])

  return (
    <DefaultLayout isShowUserList={true}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <div className='w-[320px] lg:w-[500px] mt-4'>
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeSearch(e)
            }
            placeholder="Please type title"
            prefix={<SearchOutlined />}
            size="large"
            suffix={
              <Button disabled={!value} className='bg-[#001529] text-white' onClick={handleSearchButtonClick}>Tìm kiếm</Button>}
          />
        </div>
      </Header>
      <Content className='p-2 my-4'><PostList /></Content>
    </DefaultLayout>
  )
}

export default HomePage
