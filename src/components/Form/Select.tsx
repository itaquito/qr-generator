'use client';

import type { SelectProps } from '@/types/components/Form/Select';

import { Listbox } from '@headlessui/react';

function Select<T>({
  children,
  value,
  onChange,
  CurrenyDisplayValue,
}: SelectProps) {
  return (
    <Listbox className='relative' as='div' value={value} onChange={onChange}>
      <Listbox.Button className='flex items-center rounded border-2 border-border px-2 py-1 shadow'>
        <CurrenyDisplayValue />
      </Listbox.Button>

      <Listbox.Options className='absolute max-h-60 overflow-auto rounded bg-white shadow-lg'>
        {children}
      </Listbox.Options>
    </Listbox>
  );
}

export default Select;
