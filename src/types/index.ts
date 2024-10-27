import { ChangeEvent } from 'react';
export type NumberSystem = 'decimal' | 'binary' | 'hex';

export type ConversionFunctions = {
  [K in NumberSystem]: {
    [T in NumberSystem]: (n: string) => string;
  };
};

export interface SelectProps {
  value: NumberSystem;
  onChange: (value: NumberSystem) => void;
  label: string;
}

export interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
