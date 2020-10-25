import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  padding: 10px;
  margin: 5px;
  border: gray solid 1px;
  border-radius: 15px;
`;

export const Container = styled.div`
  width: 80%;
  max-width: 800px;
  text-align: center;

  .infoPost {
    display: flex;
    
  }
  .infoPost .left {
    width: 50%;
    text-align: left;
    
  }
  .infoPost .right {
    width: 50%;
    display: flex;
    text-align: left;
  }
  .contentPost {
    display: flex;
    align-items: flex-start;
    text-align: left;
    margin-top: 10px
  }
  .commentPost {
    display: flex;
    align-items: flex-start;
    text-align: left;
  }
`;
