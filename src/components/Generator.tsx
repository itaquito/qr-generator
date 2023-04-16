"use client";

import { useState } from "react";

import Tabs from "./Tabs/Tabs";
import QRCode from "./QRCode/QRCode";

function Generator() {
  const [text, setText] = useState("");


  return (
    <>
      <Tabs setText={setText} />
      <QRCode
        text={text}
      />
    </>
  );
}

export default Generator;
