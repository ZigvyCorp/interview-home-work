import styled from "styled-components";

export const Styled = styled.div`
  &.post-item {
    position: relative;
    display: block;
    cursor: pointer;
    .extra {
      position: relative;
      z-index: 2;
      overflow: hidden;
    }
    h4.title {
      font-family: Roboto-Bold;
      font-size: 3vw;
      line-height: 3.2vw;
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .content {
      font-size: 1.5vw;
      line-height: 2vw;
      margin-top: 30px;
    }
    .hook {
      display: flex;
      justify-content: space-between;
      margin: 50px 0;
    }
    .hook .left-col .author,
    .created-at {
      margin-bottom: 10px;
      > span {
        font-size: 1.4vw;
        line-height: 1.5vw;
      }
      > span {
        :first-child {
          text-transform: capitalize;
        }
        :last-child {
          padding-left: 10px;
        }
      }
    }
    .hook .right-col .tags {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
    }
    .hook .right-col .tags .tag {
      display: block;
      padding: 5px;
      border-radius: 4px;
      font-size: 1.4vw;
      line-height: 1.5vw;
    }
  }
`;
