import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { selectIsError, selectIsLoading } from "../redux/contacts/selectors";
import { useSelector } from "react-redux";

const ContactsPage = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <>
      <div className="wrap">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error...</h2>}
      <ContactList />
    </>
  );
};

export default ContactsPage;
