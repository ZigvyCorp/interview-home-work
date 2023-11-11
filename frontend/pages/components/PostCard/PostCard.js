const { default: Image } = require("next/image")

const arrColor = ['mageta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green']

const PostCard = ({userId, id, title, body}) => {
    return (
        <div>
            <div>
                <h2 className="text-center text-lg">Post title {id} </h2>
                <div>
                    <div>
                        <p>Author:</p>
                        <p>Created at:</p>
                    </div>
                </div>
                {body}
            </div>
        </div>
    )
}
export default PostCard