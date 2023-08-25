export const Filter = ({filter, onSearchContact}) => {
    return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={evt => onSearchContact(evt.target.value)}
        placeholder="Search contact"
            />
    </div>
  );
}