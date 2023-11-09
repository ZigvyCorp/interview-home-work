import ItemPost from '../components/ItemPost';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../services/AppService';

export default function HomePage() {
    const [listPosts, setListPosts] = useState([]);
    const [currentItems, setCurrentItems] = useState(5);
    const [reachedBottom, setReachedBottom] = useState(false);
    const [searchText, setSearchText] = useState("");

    const dispatch = useDispatch();
    const allPosts = useSelector(state => state.list);

    let itemIncreasedAmount = 3;

    const searchList = () => {
        let myList = [...listPosts];
        if (searchText !== null) {
            myList = myList.filter(item => 
                item.title.toLowerCase().includes(searchText.toLowerCase())
            )
        }
        return myList;
    }

    const handleScroll = () => {
        console.log("offsetHeight:", document.documentElement.offsetHeight,
            "\ninner height:", window.innerHeight,
            "\noffsetTop:", document.documentElement.scrollTop,
            "\currentShownItems:", currentItems);

        if (window.innerHeight + document.documentElement.scrollTop <= document.documentElement.offsetHeight - 10) {
            return;
        }
        increasedShownItems();
    }

    const increasedShownItems = () => {
        setCurrentItems(item => item + itemIncreasedAmount);
        console.log('fetch more item')
    }
    const initData = async () => {
        const listPosts = await getAllPosts();
        setListPosts(listPosts);

    }

    useEffect(() => {
        initData();
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [reachedBottom])

    useEffect(() => {
        let list = listPosts.filter(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        )
        console.log(list);
    }, [searchText])

    return (
        <div>
            <nav className={"navbar navbar-expand-sm p-0 mt-1 mb-3"}>
                <div className='container-fluid px-1'>
                    <ul className='navbar-nav w-100'>
                        <li className='bg-secondary px-4 border border-2 border-black border-end-0'></li>
                        <li className='nav-item border border-2 border-black border-end-0 d-flex flex-fill m-0 p-0 align-items-center'>
                            <a className='nav-link'>Logo</a>
                        </li>
                        <li className='nav-item border border-2 border-black d-flex align-items-center '>
                            <p className={"m-0 fs-4 nav-link"}>Blogs</p>
                        </li>
                        <li className='nav-item d-flex align-items-center flex-fill border-top border-bottom border-2  border-black'></li>
                        <li className='nav-item d-flex align-items-center px-2 border border-3 border-secondary'>
                            <i className="fa-solid fa-user nav-link"></i>
                        </li>
                        <li className='nav-item d-flex align-items-center border border-2 border-start-0 border-black'>
                            <p className={"m-0 fs-4 nav-link "}>Adam Levine</p>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className='mx-auto d-flex mb-4'>
                <input
                    className='border border-black rounded mx-auto w-25 ps-2'
                    placeholder='Search'
                    onChange={event => setSearchText(event.target.value)} />
            </div>

            <div>
                {searchList().slice(0, currentItems).map(element => {
                    return <ItemPost item={element} />
                })}
            </div>
        </div>
    );
}