import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../redux/ducks/users";
import Preloading from "./Preloading";
import User from "./User";

function ModuleUsers() {
  const dispatch = useDispatch();
  const { loading, users, value, filter } = useSelector((state) => state.users);

  const contacts = users.filter((user) =>
    user.name.first.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(loadUsers(value));
  }, [dispatch, value]);

  return (
    <div className="moduleUsers">
      {loading ? (
        <Preloading />
      ) : (
        contacts.map((user) => {
          return <User user={user} key={user.login.uuid} />;
        })
      )}
    </div>
  );
}

export default ModuleUsers;
