import React from "react";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import { getValue } from '../redux/ducks/users'

function InputCount() {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.users.value);

  const changeCount = (e) => {
    dispatch(getValue(e.target.value));
  };

  return (
    <div className="inputCount">
      <TextField
        onChange={changeCount}
        value={value}
        variant={"outlined"}
        size={"small"}
        label={"Kол-во юзеров"}
      />
    </div>
  );
}

export default InputCount;
