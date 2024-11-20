import {  useNavigate } from "react-router-dom";

const Post = ({ props ,full}) => {
    
    const { title, owners, createdAt, content, tags,id } = props;
    const Navigate = useNavigate()
    const navigate = () => {
       
        Navigate(`/postdetail/${id}`)
      };
    return (
        <div>
            <h1 className="text-center mt-6 mx-auto text-3xl font-bold text-gray-600 cursor-pointer" onClick={navigate}>{title}</h1>
            <div className="flex justify-between items-start">
                <div>
                    <div className="font-semibold text-slate-700">Author: {owners?.name || owners?.username}</div>
                    <div className="font-semibold text-slate-700">Created at: Created at: Sep 18, 2018</div>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-2 w-1/4">
                    {tags?.map((tag) => (
                        <div
                            key={tag}
                            className="rounded-lg border-gray-100 border-2 px-3 py-1 cursor-pointer hover:bg-gray-50 hover:border-gray-200"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-4 mb-4"> {full ? content : content.length > 100 ?
                                    `${content.substring(0, 100)}...` : content
                                     }     </p>
        </div>
    );
};

export default Post;

