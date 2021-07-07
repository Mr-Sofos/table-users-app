import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/ducks/users";
import CustomizedDialogs from "./UserCard";

function User({ user }) {
  const dispatch = useDispatch();
  let gender = user.gender;

  if (gender === "female") {
    gender = "Жен";
  } else {
    gender = "Муж";
  }

  const handleDelete = () => {
    dispatch(deleteUser(user.login.uuid));
  };

  return (
    <div className="usersTable">
      <div className="userName">
        <div className="nameText">Имя:</div>
        <div className="fullname">
          {`${user.name.title} ${user.name.first} ${user.name.last}`}
        </div>
      </div>
      <div className="userGender">
        <div className="genderText">Пол:</div>
        <div className="gender">{gender}</div>
      </div>
      <div className="userEmail">
        <div className="emailText">email:</div>
        <div className="email">{user.email}</div>
      </div>
      <div className="profile">
        <CustomizedDialogs user={user} />
      </div>
      <Button
        onClick={handleDelete}
        variant="contained"
        color="secondary"
        size="small"
      >
        delete
      </Button>
    </div>
  );
}

export default User;
