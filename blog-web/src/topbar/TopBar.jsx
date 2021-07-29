import "./topbar.css";

function TopBar(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="top">
                    <div className="topLeft">
                        <i className="topIcon fab fa-facebook-square"></i>
                        <i className="topIcon fab fa-instagram"></i>
                        <i className="topIcon fab fa-pinterest-square"></i>
                    </div>
                    <div className="topMid">
                        <div className="topList">
                            Blogs
                        </div>
                    </div>
                    <div className="topRight">
                        <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="" className="topImage" />
                        <div className="username">Meapo</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TopBar;