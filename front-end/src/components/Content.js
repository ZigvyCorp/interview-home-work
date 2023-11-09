import React, { useCallback, useEffect, useMemo, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Content = ({title,author,tags,content,createdAt,comments,user}) =>{
    const [isOpen,setIsOpen] = useState(false)
    const color = ['success','danger','info','warning','primary','secondary','warning','success','info','dark','danger','priamry','warning','danger','primary','warning','primary','secondary','warning','success','info','dark','danger','priamry','warning','danger','primary'];
    const mouth = ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul',"Aug", 'Sep', 'Oct',"Nov",'Dec']
    console.log(author)
    const handleIsOpen = useCallback(()=>{
        setIsOpen(!isOpen)
    },[isOpen]);

    // comment owner
    const commentAuthor = useMemo((it)=>{
        console.log(it)
        const result = user && user.filter(item =>item._id === it);
        console.log(result)
        // return result[0].username
    },[user])
   
    return <div className="p-4 border-bottom border-3 border-dark pb-6">
                <h2 className="text-center text-capitalize">{title}</h2>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <div className="d-flex align-items-center">
                            <div className="fw-bold">Author:</div>
                            <div className="mx-1 text-capitalize fw-bold">{author}</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="fw-bold">Created at: </div>
                            <div className="mx-1 fw-bold">{ mouth[new Date(createdAt).getMonth()]} {new Date(createdAt).getDay()}, {new Date(createdAt).getFullYear()}</div>
                        </div>
                    </div>
                    {/* className={`text-${index}`} */}
                    <div className=" w-50 d-flex justify-content-center align-items-center py-4">
                        {tags&& tags.map((item,index)=>{
                            return <div className={`text-${color[index]} border border-${color[index]} rounded px-2 mx-1  small`} >{item}</div>
                        })}
                    </div>
                </div>
                <div className="fw-bold">
                    {content}
                </div>
                {/* comment session */}
                <div className="mt-4">
                    <div className="border-bottom border-light border-2 d-flex justify-content-between align-items-center">
                        <div className="small fw-bold text-secondary">{comments.length} replies</div>
                        <div onClick={handleIsOpen}><ArrowDropDownIcon/></div>
                    </div>
                    <div className={`${isOpen ?'d-block':'d-none'}`}>
                        {comments.map(item=>{
                            return <div className="d-flex ">
                                <div>
                                    <img src="../../avatar.png" />
                                </div>
                                <div className="  mx-2">
                                    <div className="d-flex align-items-center">
                                        <div className=" comment text-capitalize ">{user && user.find(it =>it._id === item.owner).username}</div>
                                        <div className="small mx-2" style={{color:"lightgray"}}>{(new Date().getDay() - new Date(item.createdAt).getDay()) === 0 ?(new Date().getHours() - new Date().getHours()) + 'hours ago':(new Date().getDay() - new Date(item.createdAt).getDay())+ 'day ago'}</div>
                                    </div>
                                    <div className="my-2 small fw-bold text-secondary" style={{fontWeight:"bold"}}>{item.content}</div>
                                    <div className="comment">Reply to</div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
}

export default Content