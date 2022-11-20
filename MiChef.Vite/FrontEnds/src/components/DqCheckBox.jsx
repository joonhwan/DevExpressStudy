function CheckBox({ title, checked, onChange, className }) {
  return (
    <label className="flex items-center gap-1">
      <input
        className={className}
        type="checkbox"
        id="show-my-workflow"
        checked={checked}
        onChange={onChange}
      />
      <span>{title}</span>
    </label>
  );
}
export default CheckBox;
