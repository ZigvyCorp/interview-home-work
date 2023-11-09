import { useEffect } from 'react';
import ListPost from '../../components/ListPost.jsx/ListPost';

const Home = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, []);
    return (
        <div>
            <div className="w-[1200px] mx-auto flex flex-col space-y-24 py-24">
                <ListPost />
            </div>
        </div>
    );
};
export default Home;
