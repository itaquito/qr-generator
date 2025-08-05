import type InputProps from '@/types/components/Form/Input';

function ColorPicker({ label, id, ...props }: InputProps) {
  return (
    <div className='flex flex-col'>
      {label ? (
        <label className='mr-1 text-sm font-bold text-gray-900 dark:text-white' htmlFor={id}>
          {label}
        </label>
      ) : (
        <></>
      )}

      <div className='flex'>
        <input
          className='w-24 rounded-l border-2 border-border px-2 shadow outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400'
          type='text'
          id={id}
          {...props}
        />
        <input 
          type='color' 
          id={id} 
          className='border-2 border-l-0 border-border dark:border-gray-600 rounded-r'
          {...props} 
        />
      </div>
    </div>
  );
}

export default ColorPicker;
