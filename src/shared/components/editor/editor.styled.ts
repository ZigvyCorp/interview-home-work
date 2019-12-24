import { genValFromArr } from "src/shared/utils";
import { bgFactories } from "src/routes/post/post.util";
import styled from "styled-components";

export const Styled = styled.div`
  &.editor {
    border: solid 2px #fff;
    padding: 2%;
    border-radius: 4px;
    max-width: 65%;
    margin: auto;
    margin-top: 5%;
    min-height: 50vh;
    .post-title {
      text-transform: capitalize;
      font-size: 3vw;
      line-height: 3.5vw;
      width: 100%;
      text-align: center;
      margin: 2% 0;
      background: none;
      border: none;
      display: block;
    }
    .react-tagsinput {
      margin: 2% 0;
    }
    .react-tagsinput .react-tagsinput-tag {
      background: ${genValFromArr(bgFactories)};
    }
    .react-tagsinput .react-tagsinput-input {
      color: #000;
    }
  }
`;
