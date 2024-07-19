import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import styles from "./Contacts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "../../redux/slices/contactsSlice";
import { setFilter } from "../../redux/slices/filterSlice";

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const handleAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (ev) => {
    dispatch(setFilter(ev.currentTarget.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={styles.contacts}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default Contacts;
