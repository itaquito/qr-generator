import type { Dispatch, ElementType, ReactNode, SetStateAction } from 'react';

export interface SelectProps {
  children: ReactNode;
  value: any;
  onChange: Dispatch<SetStateAction<any>>;
  CurrenyDisplayValue: ElementType;
}
