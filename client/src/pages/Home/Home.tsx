import BlogItem from '~/components/BlogItem'

const Home = () => {
  return (
    <div>
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <BlogItem key={index} />
        ))}
    </div>
  )
}

export default Home
