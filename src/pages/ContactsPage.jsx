import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import { selectIsError, selectIsLoading } from "../redux/contacts/selectors";
import { useSelector } from "react-redux";

const ContactsPage = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <div className="wrapper-contacts">
      <div className="wrap-book">
        <h1 className="title-book">Phonebook</h1>
        <ContactForm />
        <SearchBox />

        {loading && <h2 className="loading">Loading...</h2>}
        {error && <h2>Error...</h2>}
      </div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
