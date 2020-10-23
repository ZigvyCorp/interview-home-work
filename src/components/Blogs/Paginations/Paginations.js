import React,{ useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './../Blogs.scss';
import {paginationPostAll} from './../../../actions/post';

const Paginations = () =>{
	const dispatch = useDispatch();
	const totalPost = useSelector(state => state.post.totalPost);
	const page = useSelector(state => state.post.page);
	useEffect(()=>{
		if(totalPost){
			setPagination({
				...pagination,
				total:totalPost,
				page:0
			})
		}
	},[totalPost,page]);
	useEffect(()=>{
		if(page){
			setPagination({
			...pagination,
			page:page
			});
		}
	},[page]);
	const [pagination,setPagination] = useState({
										page:0,
										limit:5,
										total:0
									});
	const onChangePage = (newPage) =>{
		let newPagination = {
			...pagination,
			page: newPage
		}
		dispatch(paginationPostAll(newPage));
		setPagination(newPagination);
	}
	const totalPage = Math.ceil(pagination.total / pagination.limit);
	return(
		<div className='d-flex' style={{position:'relative',left:'38%'}}>
			<button className='btn font-weight-bold mr-2' style={{backgroundColor:'brown',color:'white'}}
				disabled={pagination.page <= 0}
				onClick={() => onChangePage(pagination.page-1)}
			>Prev</button>
			<div className='btn mr-2 font-weight-bold' style={{backgroundColor:'brown',color:'white'}}>{pagination.page +1}</div>
			<div className='btn font-weight-bold' style={{backgroundColor:'brown',color:'white'}}>of {totalPage}</div>
			<button className='btn font-weight-bold ml-2' style={{backgroundColor:'brown',color:'white'}}
				disabled={pagination.page === totalPage-1}
				onClick={() => onChangePage(pagination.page+1)}
			>Next</button>
		</div>
	);
}

export default Paginations;