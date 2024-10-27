import { InputProps } from '../types';

export const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <div className='input-section'>
      <label>Number:</label>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
