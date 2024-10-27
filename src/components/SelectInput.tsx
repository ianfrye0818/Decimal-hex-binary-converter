import { NumberSystem, SelectProps } from '../types';

export const SelectInput = ({ value, onChange, label }: SelectProps) => {
  const options: NumberSystem[] = ['decimal', 'binary', 'hex'];

  return (
    <div className='input-section'>
      <label>{label}:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as NumberSystem)}
      >
        {options.map((opt) => (
          <option
            key={opt}
            value={opt}
          >
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
