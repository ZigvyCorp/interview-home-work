import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import styled from 'styled-components';

const FlexMenu = styled(Menu)`
  display: flex;
  justify-content: space-between;
`;

const FlexItem = styled(Menu.Item)`
  flex: 1;
  text-align: center;
`;

const TopMenu = (props) => {
  return (
    <FlexMenu mode='horizontal'>
      <FlexItem>
        <Link to='/'>HomePage</Link>
      </FlexItem>
      <FlexItem>
        <Link to='/blogs'>Blogs</Link>
      </FlexItem>
      <FlexItem>
        <Link to='/account'>Account</Link>
      </FlexItem>
    </FlexMenu>
  );
};

export default TopMenu;
