import React from "react";
import styled from "styled-components";
import { useMouseDown } from "./dropdown.utils";
import { StyledDropdown } from "./dropdown.styled";
import { useSelector } from "react-redux";
import { authSelector } from "src/auth/auth.selector";
import { avatarIcon } from "src/shared/assets";
import { Link } from "react-router-dom";
import useTranslate from "src/shared/hooks/useTranslate";

interface IProps {}

const Styled = styled(StyledDropdown)`
  .dropdown-item-selected {
    display: flex;
    align-items: center;
  }
  .avatar {
    width: 48px;
    height: 48px;
    > img {
      border-radius: 50%;
    }
  }
  .name {
    min-width: 80px;
    text-align: center;
    font-size: 1vw;
    line-height: 1.2vw;
    text-transform: capitalize;
    font-family: Roboto-Bold;
  }
  .extra {
  }
`;

const DropdownAvatar = (props: IProps) => {
  const { name, avatar_url = avatarIcon() } = useSelector(authSelector).data;
  const [state, setState] = React.useState({
    toggle: false
  });
  const ref: any = React.useRef(null);
  const handleClickOutside = (e: any) => {
    if (state.toggle && ref.current && !ref.current.contains(e.target)) {
      setState({
        ...state,
        toggle: false
      });
    }
  };
  const [] = useMouseDown({
    fn: handleClickOutside
  });
  const [translate]: any = useTranslate();
  const { createPost, profile, signOut } = translate.header;
  return (
    <Styled className="dropdown-menu">
      <div
        className="dropdown-item dropdown-item-selected"
        onClick={() => setState({ ...state, toggle: !state.toggle })}
      >
        <p className="name ellipsis">{name}</p>
        <div className="avatar">
          <img src={avatar_url} alt="" />
        </div>
      </div>
      {state.toggle && (
        <div className="extra" ref={ref}>
          <Link className="dropdown-item" to="/create-post">
            {createPost}
          </Link>
          <Link className="dropdown-item" to="/profile">
            {profile}
          </Link>
          <Link
            onClick={(e: any) => {
              e.preventDefault();
              localStorage.removeItem("access_token");
              window.location.href = "/";
            }}
            className="dropdown-item"
            to="/sign-out"
          >
            {signOut}
          </Link>
        </div>
      )}
    </Styled>
  );
};

export default DropdownAvatar;
