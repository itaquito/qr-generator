'use client';

import type { QRCodeProps } from '@/types/components/QRCode/QRCode';

import { useRef, useEffect } from 'react';
import QR from 'qrcode';

function QRCode({ content, parameters }: QRCodeProps) {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvas.current || content === '') return;

    QR.toCanvas(canvas.current, content, {
      errorCorrectionLevel: parameters.errorCorrectionLevel,
      scale: parameters.scale,
      margin: parameters.margin,
      color: {
        dark: parameters.darkColor,
        light: parameters.lightColor,
      },
    });
  }, [content, parameters]);

  return (
    <div>
      <div className='sticky top-4 rounded bg-white p-2 shadow'>
        <div className='rounded border-4 border-primary'>
          {content !== '' ? (
            <canvas title='Preview of the QR code' ref={canvas} />
          ) : (
            <div className='flex h-[116px] w-[116px] items-center justify-center bg-primary p-2 text-center font-bold text-white'>
              Your QR code will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QRCode;
