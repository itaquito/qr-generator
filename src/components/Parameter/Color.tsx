import type { ChangeEvent } from 'react';

import type { ColorProps } from '@/types/components/Parameter/Color';

import ParameterLayout from './ParameterLayout';
import IcBaselineColorLens from '../Icon/IcBaselineColorLens';
import ColorPicker from '../Form/ColorPicker';

function Color({ parameters, setParameters }: ColorProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParameters((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <ParameterLayout
      title='Color'
      description='Choose the dark and light colors of your code. Please note that using colors other than white and black might make your code harder to scan.'
      Icon={IcBaselineColorLens}
    >
      <div className='flex space-x-4'>
        <ColorPicker
          label='Light color'
          id='lightColor'
          name='lightColor'
          value={parameters.lightColor}
          onChange={handleChange}
        />

        <ColorPicker
          label='Dark color'
          id='darkColor'
          name='darkColor'
          value={parameters.darkColor}
          onChange={handleChange}
        />
      </div>
    </ParameterLayout>
  );
}

export default Color;
