export const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option defaultValue={defaultValue}></option>
        {options.map((opt) => (
          <option value={opt.value}>{opt.name}</option>
        ))}
      </select>
    </div>
  );
};
