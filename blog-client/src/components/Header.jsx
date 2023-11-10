import { Row, Col } from "reactstrap";
import { Avatar, Logo } from "../assets/images";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Row className="header__container">
			<Col xs="5" className="header__left">
				<Link to="/">
					<img src={Logo} alt="Logo" height={50} /> Zigvy Blog
				</Link>
			</Col>
			<Col xs="2" className="header__center">
				Blogs
			</Col>
			<Col xs="5" className="header__right">
				<div className="header__userinfo">
					<img src={Avatar} alt="Avatar" height={50} />
					<p className="header__userinfo__username">Adam Levine</p>
				</div>
			</Col>
		</Row>
	);
};

export default Header;
