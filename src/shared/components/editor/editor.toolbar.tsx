import React, { useContext } from "react";
import styled from "styled-components";
import { RichUtils } from "draft-js";
import { EditorContext } from ".";
import { boldIcon, underlineIcon, italicIcon } from "src/shared/assets";

interface IProps {}

const Styled = styled.div`
  &.toolbar {
    display: flex;
    margin-bottom: 2%;
    .toolbar-item {
      margin: 10px;
      cursor: pointer;
      padding: 5px;
      border: solid 1px #fff;
      border-radius: 2px;
    }
    .toolbar-item .icon {
      width: 16px;
      height: 16px;
    }
  }
`;

const TOOLBAR_ITEMS = [
  { style: "BOLD", icon: boldIcon() },
  { style: "UNDERLINE", icon: underlineIcon() },
  { style: "ITALIC", icon: italicIcon() }
];
const Toolbar = (props: IProps) => {
  const { editorState, setEditorState, data }: any = useContext(EditorContext);
  const handleClick = (item: any) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, item.style));
  };
  return (
    <Styled className="toolbar">
      {TOOLBAR_ITEMS.map((item: any, index: number | string) => (
        <div
          className="toolbar-item"
          key={index}
          onClick={() => handleClick(item)}
        >
          <div className="icon">
            <img src={item.icon} alt="" />
          </div>
        </div>
      ))}
    </Styled>
  );
};

export default Toolbar;
