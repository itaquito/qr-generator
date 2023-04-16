"use client";

import { useRef, useEffect } from "react";
import QR from "qrcode";

interface QRCodeProps {
  text: string;
}

function QRCode({ text }: QRCodeProps) {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvas.current || text === "") return;

    QR.toCanvas(canvas.current, text, { errorCorrectionLevel: "high" });
  }, [canvas, text]);

  if (text === "") return <></>;

  return (
    <>
      <canvas ref={canvas}></canvas>
    </>
  );
}

export default QRCode;
