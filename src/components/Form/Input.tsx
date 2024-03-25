import type InputProps from '@/types/components/Form/Input';

import classNames from 'classnames';

function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div className='flex flex-col'>
      <label className='text-sm font-bold' htmlFor={id}>
        {label}
      </label>
      <input
        className={classNames(
          'rounded border-2 border-border px-2 shadow outline-none',
          className
        )}
        {...props}
      />
    </div>
  );
}

export default Input;