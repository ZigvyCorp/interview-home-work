import DefaultLayout from '../../layout/DefaultLayout'
import PostList from '../../components/Post/Post'
import { Content } from 'antd/es/layout/layout'




const SearchResultPage = () => {
  return (
    <DefaultLayout isShowUserList={true}>
      <Content className='p-2 my-4'><PostList /></Content>
    </DefaultLayout>
  )
}

export default SearchResultPage
