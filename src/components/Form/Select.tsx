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
  disabled = false,
}: SelectProps) {
  return (
    <div className='flex flex-col'>
      {label ? (
        <label className='mr-1 text-sm font-bold text-gray-900 dark:text-white'>{label}</label>
      ) : (
        <></>
      )}

      <Listbox 
        className='relative' 
        as='div' 
        value={value} 
        onChange={onChange}
        disabled={disabled}
      >
        <Listbox.Button 
          className={`flex items-center rounded border-2 border-border px-2 py-1 shadow ${
            disabled 
              ? 'bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed border-gray-300 dark:border-gray-600' 
              : 'bg-white dark:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-white dark:border-gray-600'
          }`}
        >
          <CurrenyDisplayValue value={value} />

          <IcArrowDropDown className='ml-1 text-gray-600 dark:text-gray-300' />
        </Listbox.Button>

        {!disabled && (
          <Listbox.Options className='absolute max-h-60 overflow-auto rounded bg-white dark:bg-gray-700 shadow-lg dark:shadow-gray-800 z-10 border dark:border-gray-600'>
            {Object.entries(options).map(([value, element]) => (
              <Listbox.Option
                className='cursor-pointer px-2 py-1 transition-all hover:bg-slate-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                key={value}
                value={value}
              >
                {element}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        )}
      </Listbox>
    </div>
  );
}

export default Select;
