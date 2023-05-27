import css from './Filter.module.css';

export default function Filter({ filter, handleFilterChange }) {
  return (
    <label className={css.search}>
      <span className={css.searchName}>Find contacts by name</span>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </label>
  );
}
