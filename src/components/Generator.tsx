'use client';

import type { QRContent } from '@/types/components/QRCode/QRCode';
import type { Parameters } from '@/types/components/Parameter/Parameter';

import { useState } from 'react';

import Tabs from './Tabs/TabViewer';
import QRCode from './QRCode/QRCode';

function Generator() {
  const [content, setContent] = useState<QRContent>('');
  const [parameters, setParameters] = useState<Parameters>({
    errorCorrectionLevel: 'low',
    lightColor: '#ffffff',
    darkColor: '#000000',
  });

  return (
    <div className='flex w-full space-x-4'>
      <Tabs
        setContent={setContent}
        parameters={parameters}
        setParameters={setParameters}
      />

      <QRCode content={content} parameters={parameters} />
    </div>
  );
}

export default Generator;
