import PostDetail from '../components/PostDetail'

const PostDetailPage = () => {
  return (
    <div id="home-page">
      <div
        className="pt-3 pb-5 mx-auto w-50"
        onScroll={() => console.log('object')}
      >
        <PostDetail />
      </div>
    </div>
  )
}

export default PostDetailPage
