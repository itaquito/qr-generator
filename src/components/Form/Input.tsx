import type InputProps from '@/types/components/Form/Input';

import classNames from 'classnames';

function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div className='flex flex-col'>
      {label ? (
        <label className='mr-1 text-sm font-bold text-gray-900 dark:text-white' htmlFor={id}>
          {label}
        </label>
      ) : (
        <></>
      )}

      <input
        className={classNames(
          'rounded border-2 border-border px-2 shadow outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400',
          className
        )}
        id={id}
        {...props}
      />
    </div>
  );
}

export default Input;
