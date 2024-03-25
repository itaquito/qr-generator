import type { TextAreaProps } from '@/types/components/Form/TextArea';

import classNames from 'classnames';

function TextArea({ label, className, id, ...props }: TextAreaProps) {
  return (
    <div className='flex flex-col'>
      <label className='text-sm font-bold' htmlFor={id}>
        {label}
      </label>

      <textarea
        className={classNames(
          'w-full rounded border-2 border-border px-2 shadow',
          className
        )}
        {...props}
      />
    </div>
  );
}

export default TextArea;
