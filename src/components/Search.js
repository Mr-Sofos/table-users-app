import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchValue } from '../redux/ducks/users'
import { TextField } from '@material-ui/core'

function Search () {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.users.filter);


  const handleSearch = (e) => {
    dispatch(searchValue(e.target.value));
  };
  return (
    <div className="inputCount">
      <TextField
        onChange={handleSearch}
        value={search}
        variant={"outlined"}
        size={"small"}
        label={"Поиск по имени"}
      />
    </div>
  )
}

export default Search