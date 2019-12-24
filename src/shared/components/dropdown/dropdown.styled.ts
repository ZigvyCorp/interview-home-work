import styled from "styled-components";

export const StyledDropdown = styled.div`
  &.dropdown-menu {
    .dropdown-item-selected {
      position: relative;
      cursor: pointer;
      border-bottom: none !important;
      /* ::after {
        position: absolute;
        content: "";
        right: 5px;
        top: 0;
        bottom: 0;
        width: 12px;
        background: url(images/icons/sort-down.svg) no-repeat;
        background-size: contain;
        background-position: center;
      } */
    }
    .extra {
      position: absolute;
      overflow-x: hidden;
      overflow-y: scroll;
      background: #fff;
      height: 200px;
      width: 250px;
      padding: 1.5%;
      box-shadow: 4px 4px 8px 4px #000;
      z-index: 10000;
      right: 5%;
      border-radius: 4px;
      top: 10%;
    }
    .dropdown-item {
      display: flex;
      color: #000;
      font-size: 1vw;
      text-transform: capitalize;
      cursor: pointer;
      height: 40px;
      line-height: 40px;
      border-bottom: solid 1px #2b4155;
      :hover {
        color: #2b4155;
      }
    }
  }
`;
