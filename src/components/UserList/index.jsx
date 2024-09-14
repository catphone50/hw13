import { connect } from "react-redux";
import UserItem from "../UserItem";
import { setFilter } from "../../redux/actions";

function UserList({ users, filter, setFilter }) {
  const filteredUsers = users.filter((user) => user.name.includes(filter));
  return (
    <div>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
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
