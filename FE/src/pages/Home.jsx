import { Posts } from "../components/ui/Posts"
import data from "../../../data/posts.json"
const Home = () => (

    data.map(post => {
        const des = post.content.slice(0, 100)
        const date = new Date(post.created_at)
        return (
            <div key={post.id}>
                <Posts title={post.title} createdDate={date.toLocaleString("en-GB")}
                    author={post.owner}
                    content={des + "..."} />
            </div>
        )

    })


)

export default Home
