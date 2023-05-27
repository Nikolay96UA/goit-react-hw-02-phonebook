import css from './ContactList.module.css'

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.contacts}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p ><span className={css.accent}> Name:</span> {contact.name}</p>
            <p> <span className={css.accent}> Number:</span>  {contact.number}</p>
            <button  className={css.dltBtn} onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
