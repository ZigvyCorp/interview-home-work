
const GenerateComments =({data})=>{
if(data.length===0){
return [];
}
return (
    <div>
        Comments:
        {data.map((comment,index)=>(
            <div className="comment">
                <div>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa&pid=Api&P=0&h=220" alt="" />
                </div>
                <div>
                    <div className="comment-info">
                        <h3>{comment.name}</h3>
                        <h4>@{comment.email}</h4>
                        <h4>create at: 2023</h4>
                    </div>
                    <div>
                        <h3>
                            {comment.body}
                        </h3>
                    </div>
                </div>
                
            </div>
        ))}
    </div>
);
}
export default GenerateComments;