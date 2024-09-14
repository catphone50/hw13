import { connect } from "react-redux";
import { setFilter } from "../../redux/actions";
import styles from "./styles.module.css";

function Filter({ setFilter }) {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <input
      className={styles.filter}
      type="text"
      onChange={handleFilterChange}
      placeholder="filter..."
    />
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
