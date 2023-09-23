import css from './Filter.module.css';

const Filter = ({ handleChange, filter, loginInputId }) => {
  return (
    <div className={css.filterWrapper}>
      <h2>Contacts</h2>
      <h3 className={css.filterHeadline}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
        id={loginInputId}
      />
    </div>
  );
};

export default Filter;
