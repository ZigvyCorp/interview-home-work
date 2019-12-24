import styled from "styled-components";

export const Styled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 70px;
  right: 0;
  border-bottom: solid 1px #aaa;
  border-right: solid 1px #aaa;
  display: flex;
  background: #fff;
  align-items: center;
  .brand {
    font-family: MavenPro-Bold;
    font-size: 24px;
    line-height: 28px;
    margin-right: auto;
  }
  .icon {
    cursor: pointer;
    padding: 0 30px;
    position: relative;
    height: 100%;
    border-left: solid 1px #aaa;
    > button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 32px;
      height: 32px;
    }
  }
  .icon .btn-close {
    width: 20px;
      height: 20px;
  }
  .languages {
    height: 100%;
    background: none;
    color: #000;
    font-family: MavenPro-Bold;
    > option {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
    }
  }
  .dropdown-menu {
    position: relative;
    height: 100%;
  }
  .dropdown-menu .dropdown-item-selected {
    top: 50%;
    transform: translateY(-50%);
  }
`;
