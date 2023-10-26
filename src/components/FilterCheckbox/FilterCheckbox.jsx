import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input type="checkbox" />
        <span className="checkbox__switch"></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
