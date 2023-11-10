import { useEffect, useState } from 'react';
import ListPost from '../../components/ListPost.jsx/ListPost';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';

const Home = ({ title }) => {
    const [index,setIndex]=useState(1)
    const [size,setSize]=useState(2)
    

    useEffect(() => {
        document.title = title;
    }, []);
    const total = useSelector(((state)=>state.post.total))
    const updateIndex=(index,size)=>{
        setIndex(index)
        setSize(size)
    }
    
    return (
        <div className="w-300 mx-auto flex flex-col space-y-24 py-24">
            <ListPost index={index} size={size} />
            <div className="text-center">
                 <Pagination defaultCurrent={index} pageSize={size} total={total} onChange={(index,size)=>updateIndex(index,size)}/>
            </div>
           
        </div>
    );
};
export default Home;
