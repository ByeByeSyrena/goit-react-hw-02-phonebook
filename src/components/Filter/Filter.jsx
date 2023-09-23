const Filter = ({ handleChange, filter, loginInputId }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
        id={loginInputId}
      />
    </>
  );
};

export default Filter;
