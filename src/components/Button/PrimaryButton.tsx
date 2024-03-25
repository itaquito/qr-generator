import type { PrimaryButtonProps } from '@/types/components/Button/PrimaryButton';

import classNames from 'classnames';

function PrimaryButton({ className, children, ...props }: PrimaryButtonProps) {
  return (
    <button
      className={classNames(
        'rounded border-2 border-primary bg-primary px-2 py-1 text-white shadow transition-all hover:bg-white hover:text-primary',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
