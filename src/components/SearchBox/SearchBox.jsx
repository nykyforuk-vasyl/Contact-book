import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
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
      <p className={s.totatText}>Total contacts: {filteredContacts.length}</p>
    </>
  );
};

export default SearchBox;
