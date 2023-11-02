import BlogCard from '../components/BlogCard'
import Container from '../components/Container'

const Blog = () => {
    return (
        <>
            <Container class1='blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='row'>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog