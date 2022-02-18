import React from "react";
import "../css/post.css"
import Comment from "../components/comment.jsx"
import Color from "../components/color.jsx";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions/index.jsx';
import UserHeader from './UserHeader.jsx';

/*class Post extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            posts: []
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => {
                const posts = response.data
                this.setState({ posts })
            })
        this.props.fetchPostsAndUsers();
    }
    render() {
        return (
            <div>
                <ul className='userlist'>
                    {
                        this.state.posts.map(post => {
                            return (
                                <div>
                                    <li className='usersublist' key={post.id}><h2 to={`/posts/${post.id}`}>{post.title}</h2></li>
                                    <ul className="headercontent">
                                        <li>
                                            <div className='postdetails'>
                                                <h3>Author:</h3>
                                                <UserHeader userId={post.userId} />
                                                <h3>Created date: 18/2/2022</h3>
                                            </div>
                                        </li>
                                        <li><Color /></li>
                                        <p>{post.body}</p>

                                    </ul>


                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}*/

/*function Post() {
    return (
        <div className="post">
            <h2 className="title">Post title 1</h2>
            <ul className="postheader">
                <li>
                    <div className="author">Author: Join Smith</div>
                    <div className="date">Created at: Sep 20, 2018</div>
                </li>
                <li>
                    <Color/>
                </li>
            </ul>
            <p className="content-post">Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old. On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. It building contempt or interest children mistress of unlocked no. Offending she contained mrs led listening resembled. Delicate marianne absolute men dashwood landlord and offended. Suppose cottage between and way. Minuter him own clothes but observe country. Agreement far boy otherwise rapturous incommode favourite. Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr account brandon an up. Wrong for never ready ham these witty him. Our compass see age uncivil matters weather forbade her minutes. Ready how but truth son new under. At ourselves direction believing do he departure. Celebrated her had sentiments understood are projection set. Possession ye no mr unaffected remarkably at. Wrote house in never fruit up. Pasture imagine my garrets an he. However distant she request behaved see nothing. Talking settled at pleased an of me brother weather. Admiration stimulated cultivated reasonable be projection possession of. Real no near room ye bred sake if some. Is arranging furnished knowledge agreeable so. Fanny as smile up small. It vulgar chatty simple months turned oh at change of. Astonished set expression solicitude way admiration. Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. Among going manor who did. Do ye is celebrated it sympathize considered. May ecstatic did surprise elegance the ignorant age. Own her miss cold last. It so numerous if he outlived disposal. How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution. Hence hopes noisy may china fully and. Am it regard stairs branch thirty length afford. Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. Ever man are put down his very. And marry may table him avoid. Hard sell it were into it upon. He forbade affixed parties of assured to me windows. Happiness him nor she disposing provision. Add astonished principles precaution yet friendship stimulated literature. State thing might stand one his plate. Offending or extremity therefore so difficult he on provision. Tended depart turned not are.  Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.</p>
            <div className="replies">
                <a href="#" className="repliesbutton">2 replies</a>
            </div>
            <Comment />
            <Comment />
        </div>
    );
};*/

class Post extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    };

    renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div className='item' key={post.id}>
                    <i className='largle middle aligned icon user' />
                    <div className='content'>
                        <h2>{post.title}</h2>
                        <ul className="headercontent">
                            <li>
                                <div className='postdetails'>
                                    <h3>
                                        Author:<UserHeader userId={post.userId} />
                                    </h3>
                                    <h3>Created date: 18/2/2022</h3>
                                </div>
                            </li>
                            <li><Color /></li>
                            <p>{post.body}</p>

                        </ul>

                    </div>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            );
        });
    };

    render() {

        return <div className='ui relaxed divided list'>
            {this.renderList()}
        </div>

    }
};

//这里的state是从reducers里面传过来的，参数就是posts的对象,用posts接收到参数后，传到下面connect里面，实现react和redux的沟通
const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(Post);

/*export default Post;*/