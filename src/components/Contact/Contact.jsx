import { ContactWrapper } from "./Contact.styled"

export const Contact = ({
    contact: { id, name, number },
    onDelete
}) => {
    return (
        <ContactWrapper>
            <p>{name}: {number}</p>
            <button onClick={()=> onDelete(id)}>Delete</button>
        </ContactWrapper>
    )
}