import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useMemo } from "react";

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);

  const handleDeleteProfile = (profileId) => {
    dispatch(deleteContact(profileId));
  };

  const filteredUsers = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [contacts, filter]);

  return (
    <ul className={styles.list}>
      {filteredUsers.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteProfile={handleDeleteProfile}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
