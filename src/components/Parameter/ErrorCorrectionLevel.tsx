import type {
  ErrorCorrectionLevelProps,
  ErrorCorrectionLevelsWithLabel,
} from '@/types/components/Parameter/ErrorCorrectionLevel';

import { Listbox } from '@headlessui/react';

import ParameterLayout from './ParameterLayout';
import IcArrowDropDown from '../Icon/IcArrowDropDown';
import IcBaselineBugReport from '../Icon/IcBaselineBugReport';
import Select from '../Form/Select';

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
  return (
    <ParameterLayout
      title='Error Correction Level'
      description='Error correction capability allows to successfully scan a QR Code even if the symbol is dirty or damaged. The percentage indicates the maximum amount of damaged surface after which the symbol becomes unreadable.'
      Icon={IcBaselineBugReport}
    >
      <Select
        value={parameters.errorCorrectionLevel}
        onChange={(value) =>
          setParameters((prevState) => ({
            ...prevState,
            errorCorrectionLevel: value,
          }))
        }
        CurrenyDisplayValue={() => (
          <>
            {ERROR_CORRECTION_LEVELS[parameters.errorCorrectionLevel].label}
            <span className='ml-1 text-primary'>
              {
                ERROR_CORRECTION_LEVELS[parameters.errorCorrectionLevel]
                  .errorResistance
              }
            </span>
            <IcArrowDropDown className='ml-1' />
          </>
        )}
      >
        {Object.entries(ERROR_CORRECTION_LEVELS).map(
          ([value, { label, errorResistance }]) => (
            <Listbox.Option
              className='cursor-pointer px-2 py-1 transition-all hover:bg-slate-200'
              key={value}
              value={value}
            >
              {label} <span className='text-primary'>{errorResistance}</span>
            </Listbox.Option>
          )
        )}
      </Select>
    </ParameterLayout>
  );
}

export default ErrorCorrectionLevel;
