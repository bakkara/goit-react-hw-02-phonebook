import { Contact } from "components/Contact/Contact"
import { List } from "./ContactList.styled"

export const ContactList = ({filterContactsList, deleteContact}) => {
    return (
     <List>
 {filterContactsList.map(item => (
        <li key={item.id}>
          <Contact contact={item} onDelete={deleteContact} />
        </li>
      ))}
     </List>
 )
}