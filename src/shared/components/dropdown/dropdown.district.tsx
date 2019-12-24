import React from "react";
import styled from "styled-components";
import { StyledDropdown } from "./dropdown.styled";
import { useMouseDown } from "./dropdown.utils";
import { citiesFactories } from "src/shared/json";
import withTranslate from "src/shared/components/hoc/withTranslate";

interface IProps {
  translate: any;
  onChangeDistrict: (district: string) => void;
}

const Styled = styled(StyledDropdown)``;

const DropdownDistrict = (props: IProps) => {
  const ref: any = React.useRef(null);
  const [state, setState] = React.useState({
    toggle: false,
    selected: {
      city: ""
    }
  });
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
        {!!state.selected.city
          ? state.selected.city
          : props.translate.dropdown.district.title}
      </div>
      {state.toggle && (
        <div className="extra" ref={ref}>
          {citiesFactories.map((item, index) => (
            <div
              className="dropdown-item"
              key={index}
              onClick={() => {
                setState({ ...state, toggle: !state.toggle, selected: item });
                props.onChangeDistrict(item.city);
              }}
            >
              {item.city}
            </div>
          ))}
        </div>
      )}
    </Styled>
  );
};

export default withTranslate(DropdownDistrict);
