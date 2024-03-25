import type { ChangeEvent } from 'react';

import type { SizeProps } from '@/types/components/Parameter/Size';

import ParameterLayout from './ParameterLayout';
import IcBaselineZoomOutMap from '../Icon/IcBaselineZoomOutMap';
import Input from '../Form/Input';

function Size({ parameters, setParameters }: SizeProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value < 1 || value > 20) return;

    setParameters((prevState) => ({
      ...prevState,
      [e.target.id]: value,
    }));
  };

  return (
    <ParameterLayout
      title='Size'
      description='Change the scale and margin of your QR code. The scale represents the amount of pixels each square of the QR code will take. The margin represents the amount of white space around the QR code.'
      Icon={IcBaselineZoomOutMap}
    >
      <div className='flex space-x-4'>
        <Input
          className='w-20'
          label='Scale'
          type='number'
          min={1}
          max={20}
          id='scale'
          name='scale'
          value={parameters.scale}
          onChange={handleChange}
        />

        <Input
          className='w-20'
          label='Margin'
          type='number'
          min={1}
          max={20}
          id='margin'
          name='margin'
          value={parameters.margin}
          onChange={handleChange}
        />
      </div>
    </ParameterLayout>
  );
}

export default Size;
