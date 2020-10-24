import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
`;

export const Container = styled.div`
  width: 80%;
  max-width: 800px;

  .infoPost {
    display: flex;
  }
  .infoPost .left {
    width: 50%;
  }
  .infoPost .right {
    width: 50%;
    display: flex;
  }
  .contentPost {
    display: flex;
    align-items: flex-start;
  }
  .commentPost {
    display: flex;
    align-items: flex-start;
  }
`;
