import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getListPost } from '../../../redux/post/postAction';
const Header = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const dispatch = useDispatch()
    const search =(e)=>{
        setSearchTerm(e)
        if(e==""){
                dispatch(getListPost(`?pageIndex=${1}&pageSize=${4}`));
        }
        else{
            dispatch(getListPost(`?pageIndex=${1}&pageSize=${10}&title=${searchTerm}`));

        }
    }

    return (
        <header className="bg-white border-b fixed w-full top-0 z-50 left-0">
            <div className="py-4 mx-auto w-300">
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                        <a href="/" className="h-12 w-12 flex-none">
                            <img
                                className="object-cover object-left"
                                src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-22.png"
                                alt="logo"
                            />
                        </a>
                        <div className="relative h-10 w-80 mx-auto">
                            <input
                                className="w-full h-full text-gray-700 bg-white border border-gray-200 rounded-lg peer  focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-20 px-4"
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => search(e.target.value)}
                            />
                        </div>
                    </div>

                    <h1 className="flex items-center justify-center text-4xl font-bold text-gray-600">Blog</h1>

                    <div className="flex items-center justify-end space-x-2">
                        <img
                            className="object-cover object-left h-12 w-12 flex-none"
                            alt=""
                            id="nav-profile-image"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkuLRwnB8594gN1D8dzJJ2Nl7hVZvzotWrGTmt7JFRLHMlK7IJZU-ZtLlo7DT7wtTnoo&usqp=CAU"
                        />
                        <p>Adam Levine</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
