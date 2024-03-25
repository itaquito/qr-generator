import type InputProps from '@/types/components/Form/Input';

function ColorPicker({ label, id, ...props }: InputProps) {
  return (
    <div className='flex flex-col'>
      {label ? (
        <label className='mr-1 text-sm font-bold' htmlFor={id}>
          {label}
        </label>
      ) : (
        <></>
      )}

      <div className='flex'>
        <input
          className='w-24 rounded-l border-2 border-border px-2 shadow outline-none'
          type='text'
          id={id}
          {...props}
        />
        <input type='color' id={id} {...props} />
      </div>
    </div>
  );
}

export default ColorPicker;
