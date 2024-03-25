import { ParameterLayoutProps } from '@/types/components/Parameter/ParameterLayout';

function ParameterLayout({
  children,
  title,
  description,
  Icon,
}: ParameterLayoutProps) {
  return (
    <div className='w-full rounded bg-white p-2 shadow'>
      <div className='mb-2'>
        <div className='flex items-center'>
          <Icon className='mr-2 h-[30px] w-[30px] text-primary' />{' '}
          <h3 className='text-xl font-bold'>{title}</h3>
        </div>
        <p className='text-justify'>{description}</p>
      </div>
      {children}
    </div>
  );
}

export default ParameterLayout;
