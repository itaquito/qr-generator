import type { SetQRContent } from '../QRCode/QRCode';
import type { Parameters, SetParameters } from '../Parameter/Parameter';

export interface TabViewerProps {
  setContent: SetQRContent;
  parameters: Parameters;
  setParameters: SetParameters;
}
