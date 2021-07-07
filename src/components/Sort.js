import React from "react";
import { Button } from "@material-ui/core";
import { sortName } from "../redux/ducks/users";
import { useDispatch } from "react-redux";

function Sort() {
  const dispatch = useDispatch();

  const handleSortName = () => {
    dispatch(sortName());
  };

  return (
    <div className="sortName">
      <Button
        onClick={handleSortName}
        variant="contained"
        color="primary"
        size="medium"
      >
        Сортировка по алфавиту
      </Button>
    </div>
  );
}

export default Sort;
