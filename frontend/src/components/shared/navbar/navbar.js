import React, { Fragment } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import useNavbar from "./useNavbar.hook";
import {Badge, Divider } from "@material-ui/core";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      "& button:focus": {
        outline: "none",
      },
    },
    appBar: {
      background: "#ffffff",
      color: "#535353",
      padding: 15,
      boxShadow: "none",
      borderBottom: "1px solid #ECECEC",
      position: "fixed",
      top: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: 28,
      color: "#161616",
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {
        fontSize: 24,
      },
        cursor: "pointer",
      textAlign: "left"
    },
    dot: {
      color: "#00D6B2",
    },
    avatar: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    image: {
      [theme.breakpoints.down("sm")]: {
        width: 30,
        height: 30,
      },
    },
    userName: {
      fontSize: 16,
      color: "#535353",
      marginLeft: 12,
      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
      },
      [theme.breakpoints.down(600)]: {
        display: "none",
      },
    },
    groupAction: {
      display: "flex",
      [theme.breakpoints.down(600)]: {
        display: "none",
      },
    },
    groupActionMobile: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    rightNavbar: {
      display: "flex",
      alignItems: "center",
    },
    iconBell: {
      marginRight: 32,
      [theme.breakpoints.down(770)]: {
        display: "none",
      },

      "& .MuiSvgIcon-root": {
        color: "#d4d2d2",
        fontSize: 30,
      },

      "& .MuiBadge-badge.MuiBadge-colorSecondary": {
        backgroundColor: "#00D6B2",
      },
    },
    iconConfirmNumber: {
      [theme.breakpoints.down(770)]: {
        display: "none",
      },
      background: "#ECECEC",
      border: 4,
      color: "#7E7E7E",
      fontSize: 16,
      height: 30,

      "& span": {
        marginRight: 5,
      },
    },
    menuCustom: {
      "& .MuiPaper-root": {
        boxShadow: "0px 2px 8px #3636361F",
        borderRadius: 4,
        minWidth: 224,
        "& .MuiList-root.MuiMenu-list.MuiList-padding": {
          padding: 0,
        },
      },
      "& .menu-item": {
        fontFamily: "Open Sans, sans-serif",
        fontSize: 16,
        color: "#535353",
        paddingTop: 10,
        paddingBottom: 10,

        "& .icon": {
          color: "#cdcccc",
          marginRight: 12,
        },

        "& .badge-count": {
          "& .MuiBadge-anchorOriginTopRightRectangle": {
            right: 8,
          },
          "& .MuiBadge-badge.MuiBadge-colorSecondary": {
            backgroundColor: "#00D6B2",
          },
        },
      },

      "& .group-item-mobile": {
        [theme.breakpoints.up(770)]: {
          display: "none",
        },
      },
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  const {
    open,
    handleMenu,
    handleClose,
    anchorEl,
    handleLogout,
    handleRedirectHome,
  } = useNavbar();

  const renderDropdown = () => {
    return (
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        className={classes.menuCustom}
      >
        <MenuItem onClick={handleClose} className="menu-item">
          Profile
        </MenuItem>
        <Divider variant="middle" />
        <MenuItem onClick={handleClose} className="menu-item">
          Edit profile
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-item">
          Support
        </MenuItem>
        <div className="group-item-mobile">
          <Divider variant="middle" />
          <MenuItem onClick={handleClose} className="menu-item">
            <ConfirmationNumberIcon className="icon" /> 32
          </MenuItem>
          <MenuItem onClick={handleClose} className="menu-item">
            <Badge badgeContent={17} color="secondary" className="badge-count">
              <NotificationsNoneOutlinedIcon className="icon" />
            </Badge>
            Notifications
          </MenuItem>
        </div>
        <Divider variant="middle" />
        <MenuItem onClick={handleClose} className="menu-item">
          <ExitToAppIcon className="icon" /> Refer friends
        </MenuItem>
        <MenuItem onClick={handleLogout} className="menu-item">
          <ShareOutlinedIcon className="icon" /> Log out
        </MenuItem>
      </Menu>
    );
  };

  const renderRightNavbarLogin = () => {
    return (
      <div className={classes.rightNavbar}>
        <div
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          className={classes.avatar}
        >
          <Avatar className={classes.image}>
              P
            </Avatar>
          <span className={classes.userName}>Phuong</span>
          <ArrowDropDownIcon fontSize="small" />
        </div>
        {renderDropdown()}
      </div>
    );
  };


  const renderRightNavbar = () => {
    return <Fragment>{renderRightNavbarLogin()}</Fragment>
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <div className="container">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <span onClick={handleRedirectHome}>
                <Link to="/" style={{textDecoration: "none", color: "#000"}}>Blogs<span className={classes.dot}>.</span></Link>
              </span>
            </Typography>
            {renderRightNavbar()}
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}
