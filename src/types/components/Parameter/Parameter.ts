import type { Dispatch, SetStateAction } from 'react';

import type { ErrorCorrectionLevels } from './ErrorCorrectionLevel';

export interface Parameters {
  errorCorrectionLevel: ErrorCorrectionLevels;
}

export type SetParameters = Dispatch<SetStateAction<Parameters>>;
