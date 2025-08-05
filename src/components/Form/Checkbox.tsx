import type { CheckboxProps } from '@/types/components/Form/Checkbox';

function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  return (
    <div className='flex items-center justify-start'>
      {label ? (
        <label className='mr-1 text-sm font-bold text-gray-900 dark:text-white' htmlFor={id}>
          {label}
        </label>
      ) : (
        <></>
      )}

      <input 
        type='checkbox' 
        className='rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-400'
        {...props} 
      />
    </div>
  );
}

export default Checkbox;
