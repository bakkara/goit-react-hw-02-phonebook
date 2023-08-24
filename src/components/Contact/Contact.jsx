export const Contact = ({
    contact: { id, name, number },
    onDelete
}) => {
    return (
        <div>
            <p>{name}: {number}</p>
            <button onClick={()=> onDelete(id)}></button>
        </div>
    )
}