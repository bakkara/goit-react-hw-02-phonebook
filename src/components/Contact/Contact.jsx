import { Button } from "components/ContactForm/ContactForm.styled"
import { ContactWrapper } from "./Contact.styled"

export const Contact = ({
    contact: { id, name, number },
    onDelete
}) => {
    return (
        <ContactWrapper>
            <p>{name}: {number}</p>
            <Button onClick={()=> onDelete(id)}>Delete</Button>
        </ContactWrapper>
    )
}