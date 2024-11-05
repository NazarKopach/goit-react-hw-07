import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (event) => {
    const action = changeFilter(event.target.value);
    dispatch(action);
  };

  return (
    <div className={styles.div}>
      <p>Find contacts by name</p>
      <input
        className={styles.input}
        value={filter}
        type="text"
        placeholder="Enter name..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
