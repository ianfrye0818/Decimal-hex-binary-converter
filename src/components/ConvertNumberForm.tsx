import { ChangeEvent, FormEvent, useState } from 'react';
import { NumberSystem } from '../types';
import { conversions } from '../lib/utils';

import { SelectInput } from './SelectInput';
import { Input } from './Input';
import { Result } from './Result';

export default function ConvertNumberForm({}) {
  const [input, setInput] = useState<string>('');
  const [from, setFrom] = useState<NumberSystem>('decimal');
  const [to, setTo] = useState<NumberSystem>('binary');
  const [result, setResult] = useState<string>('');

  const convertNumber = (): void => {
    if (!input) return;

    try {
      const converted = conversions[from][to](input);
      setResult(converted);
    } catch (err) {
      setResult('Invalid input');
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    convertNumber();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <SelectInput
        value={from}
        onChange={setFrom}
        label='Convert From'
      />

      <SelectInput
        value={to}
        onChange={setTo}
        label='Convert To'
      />

      <Input
        value={input}
        onChange={handleInputChange}
        placeholder='Enter number'
      />

      {result && <Result result={result} />}

      <button type='submit'>Convert</button>
    </form>
  );
}
