import type { TextAreaProps } from '@/types/components/Form/TextArea';

import classNames from 'classnames';

function TextArea({ label, className, id, ...props }: TextAreaProps) {
  return (
    <div className='flex flex-col'>
      {label ? (
        <label className='mr-1 text-sm font-bold text-gray-900 dark:text-white' htmlFor={id}>
          {label}
        </label>
      ) : (
        <></>
      )}

      <textarea
        className={classNames(
          'w-full rounded border-2 border-border px-2 shadow outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400',
          className
        )}
        id={id}
        {...props}
      />
    </div>
  );
}

export default TextArea;
