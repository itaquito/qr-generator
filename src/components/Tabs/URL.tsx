"use client";

import type { tabComponentProps } from "@/util/listOfTabs";
import type { ChangeEvent } from "react";

function URL({ setText }: tabComponentProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <input
      type="text"
      onChange={handleChange}
    />
  );
}

export default URL;
