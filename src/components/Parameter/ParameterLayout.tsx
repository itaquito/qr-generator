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
        <h3 className='flex items-center text-xl font-bold'>
          <Icon className='mr-2 h-[30px] w-[30px]' /> {title}
        </h3>
        <p className='text-justify'>{description}</p>
      </div>
      {children}
    </div>
  );
}

export default ParameterLayout;
