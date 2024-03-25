import type { TextAreaProps } from '@/types/components/Form/TextArea';

import classNames from 'classnames';

function TextArea({ label, className, id, ...props }: TextAreaProps) {
  return (
    <div className='flex flex-col'>
      {label ? (
        <label className='mr-1 text-sm font-bold' htmlFor={id}>
          {label}
        </label>
      ) : (
        <></>
      )}

      <textarea
        className={classNames(
          'w-full rounded border-2 border-border px-2 shadow',
          className
        )}
        id={id}
        {...props}
      />
    </div>
  );
}

export default TextArea;
