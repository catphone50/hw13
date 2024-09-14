import { connect } from "react-redux";
import { setFilter } from "../../redux/actions";

function Filter({ setFilter }) {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return <input type="text" onChange={handleFilterChange} />;
}
const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
