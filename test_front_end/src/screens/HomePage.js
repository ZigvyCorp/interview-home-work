import Post from '../components/ItemPost';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../services/AppService';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [currentItems, setCurrentItems] = useState(5);
    const [reachedBottom, setReachedBottom] = useState(false);

    const dispatch = useDispatch();
    const allPosts = useSelector(state => state.list);

    let itemIncreasedAmount = 3;

    const handleScroll = () => {
        console.log("offsetHeight:", document.documentElement.offsetHeight,
            "\ninner height:", window.innerHeight,
            "\noffsetTop:", document.body.scrollTop,
            "\currentShownItems:", currentItems);

        if (window.innerHeight + document.body.scrollTop <= document.documentElement.offsetHeight - 10) {
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
        setPosts(listPosts);

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
    return (
        <div>
            <nav className={"navbar navbar-enpand-lg navbar-light bg-light m-0"}>
                <div className={"h2 border border-4 border-black flex-fill d-inline-flex"}>
                    <a className={"h2 border p-3 m-0 bg-secondary"}></a>
                    <a >Logo</a>
                </div>
                <a className={"h2 border border-4 border-black flex-fill"}>Blogs</a>
                <div className={"h2 border border-4 border-black flex-fill"}>
                    <i className="fa-solid fa-user border border-4"></i>
                    <a>Adam Levine</a>
                </div>
            </nav>
            <div className={""}>
                {posts.slice(0, currentItems).map(element => {
                    return <Post item={element} />
                })}
            </div>
        </div>
    );
}