import type { CheckboxProps } from '@/types/components/Form/Checkbox';

function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  return (
    <div className='flex items-center justify-start'>
      <label className='mr-1 text-sm font-bold' htmlFor={id}>
        {label}
      </label>

      <input type='checkbox' {...props} />
    </div>
  );
}

export default Checkbox;
