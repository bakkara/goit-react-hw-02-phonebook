import { Contact } from "components/Contact/Contact"

export const ContactList = ({filterContactsList, deleteContact}) => {
    return (
     <ul>
 {filterContactsList.map(item => (
        <li key={item.id}>
          <Contact contact={item} onDelete={deleteContact} />
        </li>
      ))}
     </ul>
 )
}