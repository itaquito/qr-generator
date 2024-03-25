'use client';

import type { QRCodeProps } from '@/types/components/QRCode/QRCode';

import { useRef, useEffect } from 'react';
import QR from 'qrcode';
import PrimaryButton from '../Button/PrimaryButton';

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

  const handlePNGDownload = async () => {
    if (!canvas.current || content === '') return;

    const dataURL = canvas.current.toDataURL('image/png');

    const anchor = document.createElement('a');
    anchor.href = dataURL;
    anchor.download = `qrcode_${new Date().getTime()}.png`;
    anchor.target = '_blank';
    anchor.click();
  };

  const handleSVGDownload = async () => {
    if (!canvas.current || content === '') return;

    const svg = await QR.toString(content, {
      type: 'svg',
      errorCorrectionLevel: parameters.errorCorrectionLevel,
      scale: parameters.scale,
      margin: parameters.margin,
      color: {
        dark: parameters.darkColor,
        light: parameters.lightColor,
      },
    });

    const anchor = document.createElement('a');
    anchor.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    anchor.download = `qrcode_${new Date().getTime()}.svg`;
    anchor.target = '_blank';
    anchor.click();
  };

  return (
    <div>
      <div className='sticky top-4 space-y-4 rounded bg-white p-2 shadow'>
        <div className='rounded border-4 border-primary'>
          {content !== '' ? (
            <canvas title='Preview of the QR code' ref={canvas} />
          ) : (
            <div className='flex h-[116px] w-[116px] items-center justify-center p-2 text-center font-bold text-primary'>
              Your QR code will appear here
            </div>
          )}
        </div>

        <div className='flex flex-col items-center space-y-4'>
          <PrimaryButton className='w-full' onClick={handlePNGDownload}>
            Download as PNG
          </PrimaryButton>

          <PrimaryButton className='w-full' onClick={handleSVGDownload}>
            Download as SVG
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default QRCode;
