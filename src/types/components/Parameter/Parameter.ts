import type { Dispatch, SetStateAction } from 'react';

import type { ErrorCorrectionLevels } from './ErrorCorrectionLevel';

export interface Parameters {
  errorCorrectionLevel: ErrorCorrectionLevels;
  lightColor: string;
  darkColor: string;
  scale: number;
  margin: number;
}

export type SetParameters = Dispatch<SetStateAction<Parameters>>;
