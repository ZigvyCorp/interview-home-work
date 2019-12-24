import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs as Styled } from "./tabs.styled";
import Tab from "./tab";

interface IProps {
  children: any[];
}

const Tabs = (props: IProps) => {
  const { children } = props;
  const [activeTab, setActiveTab] = React.useState(children[0].props.tabId);
  const onClickTabItem = (tabId: number) => {
    setActiveTab(tabId);
  };
  return (
    <Styled className="tabs">
      <ol className="tab-list">
        {children.map(child => {
          return (
            <Tab
              activeTab={activeTab}
              key={child.props.tabId}
              onClickTabItem={onClickTabItem}
              {...child.props}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map(child => {
          if (child.props.tabId !== activeTab) return null;
          return child.props.renderContent();
        })}
      </div>
    </Styled>
  );
};

Tabs.propTypes = {};

export default Tabs;
