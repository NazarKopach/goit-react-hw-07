import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteProfile = (profileId) => {
    dispatch(deleteContact(profileId));
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteProfile={handleDeleteProfile}
            />
          </li>
        ))
      ) : (
        <p className={styles.noContacts}>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
