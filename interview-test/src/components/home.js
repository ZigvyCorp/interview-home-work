import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link className="blogs-button" to="/blogs">To blogs</Link>
        </div>
    );
}
 
export default Home;