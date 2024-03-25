import type {
  ErrorCorrectionLevelProps,
  ErrorCorrectionLevels,
  ErrorCorrectionLevelsWithLabel,
} from '@/types/components/Parameter/ErrorCorrectionLevel';
import type { SelectOptions } from '@/types/components/Form/Select';

import ParameterLayout from './ParameterLayout';
import Select from '../Form/Select';
import IcBaselineBugReport from '../Icon/IcBaselineBugReport';

const ERROR_CORRECTION_LEVELS: ErrorCorrectionLevelsWithLabel = {
  low: { label: 'Low', errorResistance: '~7%' },
  medium: { label: 'Medium', errorResistance: '~15%' },
  quartile: { label: 'Quartile', errorResistance: '~25%' },
  high: { label: 'High', errorResistance: '~30%' },
};

function ErrorCorrectionLevel({
  parameters,
  setParameters,
}: ErrorCorrectionLevelProps) {
  let options: SelectOptions = {};
  Object.entries(ERROR_CORRECTION_LEVELS).forEach(
    ([value, { label, errorResistance }]) => {
      options = {
        ...options,
        [value]: (
          <>
            {label} <span className='text-primary'>{errorResistance}</span>
          </>
        ),
      };
    }
  );

  const handleChange = (value: ErrorCorrectionLevels) => {
    setParameters((prevState) => ({
      ...prevState,
      errorCorrectionLevel: value,
    }));
  };

  return (
    <ParameterLayout
      title='Error Correction Level'
      description='Error correction capability allows to successfully scan a QR Code even if the symbol is dirty or damaged. The percentage indicates the maximum amount of damaged surface after which the symbol becomes unreadable.'
      Icon={IcBaselineBugReport}
    >
      <Select
        value={parameters.errorCorrectionLevel}
        options={options}
        onChange={handleChange}
        CurrenyDisplayValue={({ value }: { value: ErrorCorrectionLevels }) => (
          <>
            {ERROR_CORRECTION_LEVELS[value].label}

            <span className='ml-1 text-primary'>
              {ERROR_CORRECTION_LEVELS[value].errorResistance}
            </span>
          </>
        )}
      />
    </ParameterLayout>
  );
}

export default ErrorCorrectionLevel;
