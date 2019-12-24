import styled from "styled-components";

const Styled = styled.div`
  width: 100%;
  color: #ffffff;
  margin: 20px 0;
  max-width: 520px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 2%;
  .notice {
  }
  .content {
    font-family: "Roboto-Bold";
    font-size: 16px;
    line-height: 20px;
    padding-left: 2%;
  }
  &.error {
    background-color: rgb(244, 0, 0);
  }

  &.success {
    background-color: #4bb543;
  }

  @keyframes slide-in {
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes fade {
    100% {
      opacity: 1;
    }
  }

  &.slide-in {
    transform: translateX(100%);
    animation: slide-in 0.5s forwards;
  }

  &.fade {
    opacity: 0;
    animation: fade 1s forwards;
  }
`;

export default Styled;
