import { ConversionFunctions } from '../types';

export const conversions: ConversionFunctions = {
  decimal: {
    binary: (n: string) => parseInt(n).toString(2),
    hex: (n: string) => parseInt(n).toString(16).toUpperCase(),
    decimal: (n: string) => n,
  },
  binary: {
    decimal: (n: string) => parseInt(n, 2).toString(),
    hex: (n: string) => parseInt(n, 2).toString(16).toUpperCase(),
    binary: (n: string) => n,
  },
  hex: {
    decimal: (n: string) => parseInt(n, 16).toString(),
    binary: (n: string) => parseInt(n, 16).toString(2),
    hex: (n: string) => n,
  },
};
