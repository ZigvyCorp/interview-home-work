/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

import { Layout } from 'antd';

import UserHeader from '../components/Header/UserHeader';
const { Header, Footer, Content } = Layout;




// core components
// import Navbar from "../components/Navbars/Navbar.jsx";
// import Footer from "../components/Footer/Footer.jsx";
// import Sidebar from "../components/Sidebar/Sidebar.jsx";

import routes from "../router";

// import dashboardStyle from "../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import '../App.css';



import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

// import ChangeView from "../views/Login/ChangeView.jsx";
// import {getPermissonAPI} from "../services/api/getPermisson.jsx";
// import {getInfoConstants} from "../_constants/getinfo.constants";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/" && !prop.invisible) {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
    <Redirect from="/" to="/home" />
  </Switch>
);

/*

    <Route path={"/admin/changeviews"} component={ChangeView} />
    <Redirect from="/admin" to="/admin/dashboard" />

*/

class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   image: image,
    //   color: "blue",
    //   hasImage: true,
    //   fixedClasses: "dropdown",
    //   mobileOpen: false
    // };
  }

//   handleImageClick = image => {
//     this.setState({ image: image });
//   };
//   handleColorClick = color => {
//     this.setState({ color: color });
//   };
//   handleFixedClick = () => {
//     if (this.state.fixedClasses === "dropdown") {
//       this.setState({ fixedClasses: "dropdown show" });
//     } else {
//       this.setState({ fixedClasses: "dropdown" });
//     }
//   };
//   handleDrawerToggle = () => {
//     this.setState({ mobileOpen: !this.state.mobileOpen });
//   };
//   getRoute() {
//     return this.props.location.pathname !== "/admin/maps";
//   }
//   resizeFunction = () => {
//     if (window.innerWidth >= 960) {
//       this.setState({ mobileOpen: false });
//     }
//   };
//   componentDidMount() {
//     if (navigator.platform.indexOf("Win") > -1) {
//       const ps = new PerfectScrollbar(this.refs.mainPanel);
//     }
//     window.addEventListener("resize", this.resizeFunction);
//   }
//   componentDidUpdate(e) {
//     if (e.history.location.pathname !== e.location.pathname) {
//       this.refs.mainPanel.scrollTop = 0;
//       if (this.state.mobileOpen) {
//         this.setState({ mobileOpen: false });
//       }
//     }
//   }
//   componentWillUnmount() {
//     window.removeEventListener("resize", this.resizeFunction);
//   }
  render() {
    //const { classes, ...rest } = this.props;
    return (
        <>
        <Layout>
            <Header>
                <div className="logo"></div>
                <UserHeader />
            </Header>
            <Content>{switchRoutes}</Content>
            <Footer style={{textAlign: 'center'}}>@Copyright by Tran Duong Minh Hai</Footer>
    </Layout>
        </>
    //   <div className={classes.wrapper}>
    //     <Sidebar
    //       routes={routes}
    //       logoText={"Super Point"}
    //       logo={logo}
    //       image={this.state.image}
    //       handleDrawerToggle={this.handleDrawerToggle}
    //       open={this.state.mobileOpen}
    //       color={this.state.color}
    //       {...rest}
    //     />
    //     <div className={classes.mainPanel} ref="mainPanel">
    //       <Navbar
    //         routes={routes}
    //         handleDrawerToggle={this.handleDrawerToggle}
    //         {...rest}
    //       />
    //       {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
    //       {this.getRoute() ? (
    //         <div className={classes.content}>
    //           <div className={classes.container}>{switchRoutes}</div>
    //         </div>
    //       ) : (
    //         <div className={classes.map}>{switchRoutes}</div>
    //       )}
    //       {this.getRoute() ? <Footer /> : null}
    //     </div>
    //   </div>
    );
  }
}

// Dashboard.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// function mapStatetoProps(state)
// {
//   return {state};
// }

export default withRouter(Home); //connect(mapStatetoProps)(Home)
