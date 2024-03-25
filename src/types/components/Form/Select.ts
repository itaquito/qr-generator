import type { Dispatch, ElementType, ReactNode, SetStateAction } from 'react';

export interface SelectProps {
  options: SelectOptions;
  value: any;
  onChange: Dispatch<SetStateAction<any>>;
  CurrenyDisplayValue: ElementType<CurrentDisplayValueProps>;
  label?: string;
}

export interface SelectOptions {
  [key: string]: ReactNode;
}

export interface CurrentDisplayValueProps {
  value: any;
}
