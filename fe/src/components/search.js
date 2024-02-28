import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import className from "classnames/bind";

import style from "./components.module.scss";
import { useState } from "react";

const cx = className.bind(style);
function Search({ sendValue }) {
  const [value, setValue] = useState("");
  return (
    <div className={cx("search-wrapper")}>
      <div className={cx("search")}>
        <div className={cx("search-icon")}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              sendValue(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
