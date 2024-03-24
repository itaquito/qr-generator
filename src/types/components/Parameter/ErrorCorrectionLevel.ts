import type { Parameters, SetParameters } from './Parameter';

export interface ErrorCorrectionLevelProps {
  parameters: Parameters;
  setParameters: SetParameters;
}

export type ErrorCorrectionLevels = 'low' | 'medium' | 'quartile' | 'high';

export type ErrorCorrectionLevelsWithLabel = {
  [value in ErrorCorrectionLevels]: {
    label: string;
    errorResistance: string;
  };
};
