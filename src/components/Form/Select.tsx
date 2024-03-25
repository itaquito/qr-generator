'use client';

import type { SelectProps } from '@/types/components/Form/Select';

import { Listbox } from '@headlessui/react';

import IcArrowDropDown from '../Icon/IcArrowDropDown';

function Select({
  options,
  value,
  onChange,
  CurrenyDisplayValue,
  label,
}: SelectProps) {
  return (
    <div className='flex flex-col'>
      {label ? (
        <label className='mr-1 text-sm font-bold'>{label}</label>
      ) : (
        <></>
      )}

      <Listbox className='relative' as='div' value={value} onChange={onChange}>
        <Listbox.Button className='flex items-center rounded border-2 border-border px-2 py-1 shadow'>
          <CurrenyDisplayValue value={value} />

          <IcArrowDropDown className='ml-1' />
        </Listbox.Button>

        <Listbox.Options className='absolute max-h-60 overflow-auto rounded bg-white shadow-lg'>
          {Object.entries(options).map(([value, element]) => (
            <Listbox.Option
              className='cursor-pointer px-2 py-1 transition-all hover:bg-slate-200'
              key={value}
              value={value}
            >
              {element}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default Select;
