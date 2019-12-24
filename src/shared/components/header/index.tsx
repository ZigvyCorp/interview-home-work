import React from "react";
import styled from "styled-components";
import withTranslate from "src/shared/components/hoc/withTranslate";
import Logo from "src/shared/components/logo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionTogglePopup } from "src/shared/popup/popup.actions";
import { authSelector } from "src/auth/auth.selector";
import Avatar from "../dropdown/dropdown.avatar";

interface IProps {
  translate: any;
}

const Styled = styled.div`
  &.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > a {
      display: block;
      font-size: 1.5vw;
      line-height: 1.6vw;
      color: #fff;
      font-family: RoBoTo-Bold;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const Header = (props: IProps) => {
  const { blog, signin } = props.translate.header;
  const dispatch = useDispatch();
  const { isAuthen } = useSelector(authSelector);
  const handleSignIn = (e: any) => {
    e.preventDefault();
    dispatch(
      actionTogglePopup({
        toggle: true,
        data: {
          comp: "signin"
        }
      })
    );
  };
  return (
    <Styled className="header">
      <Logo />
      <Link to="/">{blog}</Link>
      {isAuthen ? (
        <Avatar />
      ) : (
        <Link to="/sign-in" onClick={handleSignIn}>
          {signin}
        </Link>
      )}
    </Styled>
  );
};

export default withTranslate(Header);
