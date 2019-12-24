import styled from "styled-components";
import { breakpoints } from "src/shared/utils/styled";

export const commomStyledInput = styled.div`
  position: relative;
  height: 50px;
  max-width: 100%;
  background: #fff;
  margin-top: 16px;
  opacity: 0.5;
  .label {
    text-transform: capitalize;
    color: #84878f;
    font-size: 14px;
    line-height: 19px;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    line-height: 19px;
    left: 10px;
    transition: transform 0.15s ease 0s, top 0.15s ease 0s,
      font-size 0.15s ease 0s;
  }
  &.focusing {
    opacity: 1;
    .label {
      top: 12px;
      left: 10px;
      font-size: 12px;
      line-height: 13px;
      transition: transform 0.15s ease 0s, top 0.15s ease 0s,
        font-size 0.15s ease 0s;
    }
  }
  > input {
    position: absolute;
    background-color: transparent;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    padding: 15px 50px 5px 10px;
    font-size: 18px;
    line-height: 19px;
    font-weight: normal;
    border-radius: 4px;
    border: solid 1px #000;
    color: #000;
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    > input {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
