import React from "react";

const useNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
  };

  const handleRedirectHome = () => {
      return;
  };

  const handleSignIn = () => {
      return;
  };

  const handleSignUp = () => {
      return;
  };

  return {
    open,
    handleMenu,
    handleClose,
    anchorEl,
    handleLogout,
    handleRedirectHome,
    handleSignIn,
    handleSignUp,
  };
};

export default useNavbar;
