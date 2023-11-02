import "./FilterCheckbox.css";

function FilterCheckbox({ onFilter, isActive }) {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input 
         className="switch"
         id="switch"
         type="checkbox"
         onChange={onFilter}
         checked={isActive}
         />
        <span className="checkbox__switch"
        htmlFor="switch"
        ></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
