import { ParameterLayoutProps } from '@/types/components/Parameter/ParameterLayout';

function ParameterLayout({
  children,
  title,
  description,
  Icon,
}: ParameterLayoutProps) {
  return (
    <div className='w-full rounded bg-white dark:bg-gray-800 p-2 shadow dark:shadow-gray-700'>
      <div className='mb-2'>
        <div className='flex items-center'>
          <Icon className='mr-2 h-[30px] w-[30px] text-primary dark:text-indigo-400' />{' '}
          <h3 className='text-xl font-bold text-gray-900 dark:text-white'>{title}</h3>
        </div>
        <p className='text-justify text-gray-700 dark:text-gray-300'>{description}</p>
      </div>
      {children}
    </div>
  );
}

export default ParameterLayout;
