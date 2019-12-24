import styled from "styled-components";
import { getEnvs } from "src/shared/utils";

export const StyledFonts = styled.div`
  @font-face {
    font-family: Roboto-Bold;
    src: url(${getEnvs().SOURCE_DOMAIN}/fonts/Roboto/Roboto-Bold.ttf);
  }
  @font-face {
    font-family: Roboto-Regular;
    src: url(${getEnvs().SOURCE_DOMAIN}/fonts/Roboto/Roboto-Regular.ttf);
  }
  @font-face {
    font-family: "Circular Std Bold";
    src: url(${getEnvs().SOURCE_DOMAIN}/fonts/circular_std_bold/CircularStd-Bold.otf);
  }
`;

export const Styled = styled(StyledFonts)`
  &.popup-open {
    overflow: hidden;
    max-height: 100vh;
    height: 100vh;
  }
  background: #2b2b2b;
  min-height: 100vh;
  padding: 2% 5%;
  * {
    font-family: Roboto-Regular;
    color: #fff;
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .group-btn {
  }
  h2.title {
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 6vw;
    letter-spacing: 0.25em;
    font-family: "Circular Std Bold";
    line-height: 3em;
  }
  .post-item {
    margin: 0 auto;
    max-width: 65%;
    min-height: 350px;
    :first-child {
      margin-top: unset;
    }
  }
  .btn {
    background: #0c0c0c;
    color: #fff;
    font-family: Roboto-Bold;
    font-size: 18px;
    max-width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 4px;
    margin: auto 2%;
    &.btn-submit {
      background: #586a7b;
    }
    &.disabled {
      opacity: 0.5;
    }
  }
`;
