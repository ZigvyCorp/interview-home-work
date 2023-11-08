import GenerateComments from "./GenerateComments";

const GeneratePost=({data})=>{
    if(!data.data){
        return [];
    }
return(
    <div>

        {data.data.map((post,index)=>(
            <div className="post" key={index}>
                <div className="title ">
                <h1>{post.title}</h1>
                </div>
                <div className="info">
                    <h3>Author: {post.user.username}</h3>
                    <h3>Created at: Sep 20,2018</h3>
                </div>
                <div className="body">
                    <h2>{post.body}</h2>
                </div>
                <div className="comment-section">
                    
                    <GenerateComments data={data.data[index].comments} />
                </div>
            </div>
        ))}
    )
    </div>
)
}
export default GeneratePost;