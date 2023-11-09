import axios from "axios";
import { Button } from "bootstrap";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {toast } from 'react-toastify';

const CreatePost = () =>{
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [createAt,setCreateAt] = useState(0);
    const [tag,setTag] = useState('');
    const [tagArray,setTagArray] = useState([])
    

    const Submit = useCallback((e)=>{
        e.preventDefault();
        let retiveLocalStorage = localStorage.getItem('currentUser');
       if(retiveLocalStorage){
        let retriveArr = JSON.parse(retiveLocalStorage);
         console.log(retriveArr)
     
        if(retriveArr){
            axios.post('http://localhost:3001/posts/add',{
                owner: retriveArr[0]._id,
                title,
                content,
                createAt,
                tagArray
            })
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
    },[content,createAt,tagArray,title]);

    const handleAddTag = useCallback((item)=>{
        console.log(item);
        let array = tagArray;
        if(tagArray[tagArray.lenght-1] === item){
            toast.error('tag is exist');
            return;
        }
        console.log('he ')
        array.push(item);
        setTagArray(array)
        console.log(tagArray)
    },[tagArray]);

    console.log(title,content,createAt,tagArray)
    return  <div className="d-flex vh-100  justify-content-center align-items-center">
                <div className="w-50 bg-light rounded border-dark rounded p-3">
                    <form onSubmit={Submit}>
                        <h2 className="text-center text-success text-capitalize">Add post</h2>
                        <div className="mb-4"> 
                            <label htmlFor=" " className="text-muted small">Title</label>
                            <input type="text" onChange={e =>setTitle(e.target.value)} required placeholder="title" className="form-control"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="text-muted small">Content</label>
                            <input type="text" onChange={e =>setContent(e.target.value)} required placeholder="content" className="form-control"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="text-muted small">Created At</label>
                            <input type="text" onChange={e =>setCreateAt(e.target.value)}  placeholder="Created At" className="form-control"/>
                        </div>
                        <div className="mb-4 ">
                            <label htmlFor="" className="text-muted small">Tag</label>
                            <div className="d-flex justify-content-center">
                                <div className="w-75">
                                    <input type="text" onChange={e=>setTag(e.target.value)} placeholder="Add Tag" required className="form-control"/>
                                </div>
                                <div className="w-25 d-flex align-items-ennter h-full ps-2 ">
                                    <div onClick={()=>handleAddTag(tag)} className=" bg-success h-100 rounded w-100 text-white text-capitalize d-flex align-items-center justify-content-center" style={{cursor:"pointer"}}>Add Tag</div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end ">
                            <input type="submit" value="post article" className="bg-success border-0 d-flex align-items-center text-white text-capitalize rounded"/>
                        </div>
                    </form>
                    <div className=""><Link to="/" className="text-dark text-muted ">Back</Link></div>
                </div>
            </div>
}

export default CreatePost