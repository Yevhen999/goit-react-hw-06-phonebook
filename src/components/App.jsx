import ContactsList from './Contacts/ContactsList';
import { FormData } from './Contacts/FormData';
import { Filter } from './Contacts/Filter';
import { RiGameFill } from 'react-icons/ri';
import css from './Contacts/Contacts.module.css';
import { useSelector } from 'react-redux';
import { contactsSelector, filteredContactsSelector } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(contactsSelector);
  const filteredContacts = useSelector(filteredContactsSelector);
  const getVisibleContacts = () => {
    const normalizedFilter = filteredContacts.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        color: '#010101',
      }}
    >
      <div
        style={{
          border: '2px solid tomato',
          borderRadius: '5px',
          padding: '20px',
          backgroundColor: 'yellow',
        }}
      >
        <div className={css.phonebookWrapper}>
          <RiGameFill
            size={25}
            style={{
              fill: 'tomato',
            }}
          />
          <h1>Phonebook</h1>
        </div>
        <FormData />
        <h1
          style={{
            marginBottom: '10px',
          }}
        >
          📃Contacts
        </h1>
        {contacts.length > 0 ? (
          <>
            <Filter filter={filteredContacts} />
            <ContactsList items={visibleContacts} />
          </>
        ) : (
          <p>There are no contacts</p>
        )}
      </div>
    </div>
  );
};
