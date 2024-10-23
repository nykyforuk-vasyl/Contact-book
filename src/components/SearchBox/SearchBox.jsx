import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <>
      <p className={s.text}>Finds contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        placeholder="Write some..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        name="search"
      />
    </>
  );
};

export default SearchBox;
