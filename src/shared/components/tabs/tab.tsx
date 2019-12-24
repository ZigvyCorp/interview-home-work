import React from "react";

interface IProps {
  activeTab: number;
  tabId: number;
  onClickTabItem: (tabId: number) => void;
  renderContent: () => any;
  renderTab: () => any;
  isDisabled?: boolean;
}

const Tab = (props: IProps) => {
  const {
    activeTab,
    tabId,
    onClickTabItem,
    renderContent,
    renderTab,
    isDisabled = false,
    ...rest
  } = props;
  let className = `tab-list-item ${
    activeTab === tabId ? " tab-list-active" : ""
  }`;
  return (
    <li
      className={className}
      onClick={() => (!isDisabled ? onClickTabItem(tabId) : false)}
      {...rest}
    >
      {renderTab()}
    </li>
  );
};

Tab.propTypes = {};

export default Tab;
