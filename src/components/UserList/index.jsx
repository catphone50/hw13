import { connect } from "react-redux";
import UserItem from "../UserItem";
import { setFilter } from "../../redux/actions";
import styles from "./styles.module.css";

function UserList({ users, filter, setFilter }) {
  const filteredUsers = users.filter((user) => user.name.includes(filter));
  return (
    <div className={styles.container}>
      <ul >
        {filteredUsers.map((user) => (
          <li className={styles.item} key={user.id}>
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
