import React from 'react';
import { useDispatch } from 'react-redux';
import { actionSetQuery } from '../redux/action/queryAction';

export default function Header() {
  const dispatch = useDispatch();

  const handleOnQuery = event => {
    dispatch(actionSetQuery(event.target.value));
  };

  return (
    <div className="m-5">
      <input
        class="form-control p-3"
        list="datalistOptions"
        id="exampleDataList"
        type="text"
        placeholder="Type to search..."
        onChange={handleOnQuery}
      />
    </div>
  );
}
