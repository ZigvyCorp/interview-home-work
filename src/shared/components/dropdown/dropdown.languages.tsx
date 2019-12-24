import React from "react";
import { useMouseDown } from "./dropdown.utils";
import styled from "styled-components";
import { StyledDropdown } from "./dropdown.styled";

interface IProps {
  data: any[];
}

const Styled = styled(StyledDropdown)``;

const Dropdown = (props: IProps) => {
  const { data } = props;
  const notEmpty = data.length > 0;
  const [state, setState] = React.useState({
    selected: notEmpty
      ? data[0]
      : {
          nativeName: "",
          code: ""
        },
    toggle: false
  });
  const ref: any = React.useRef(null);
  const handleClickOutside = (e: any) => {
    if (state.toggle && ref.current && !ref.current.contains(e.target)) {
      setState({
        ...state,
        toggle: false
      });
    }
  };
  const []: any = useMouseDown({
    fn: handleClickOutside
  });
  return (
    <Styled className="dropdown-menu">
      <div
        className="dropdown-item dropdown-item-selected ellipsis"
        onClick={() =>
          setState({
            ...state,
            toggle: !state.toggle
          })
        }
      >
        {!!state.selected && state.selected.nativeName}
      </div>
      {state.toggle && (
        <div className="extra" ref={ref}>
          {data.map(item => (
            <div
              className="dropdown-item"
              key={item.code}
              onClick={() =>
                setState({ ...state, toggle: !state.toggle, selected: item })
              }
            >
              {item.nativeName}
            </div>
          ))}
        </div>
      )}
    </Styled>
  );
};

export default Dropdown;
