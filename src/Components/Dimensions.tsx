"use client"

import React, { useState } from "react";
import InputSet from "./InputSet";
import { DIMENSIONS } from "@/util/Dimensions";
import type { Dimensions } from "@/util/Dimensions";

const Dimensions = () => {
  const [selectedDimension, setSelectedDimension] = useState<Dimensions | null>(
    null
  );

  const handleDimensionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedText = event.target.value;
    const dimension = DIMENSIONS.find((d) => d.text === selectedText) || null;
    setSelectedDimension(dimension);
  };

  return (
    <>
      <select name="dimensions" id="dimensions" onChange={handleDimensionChange}>
        <option value="">Select Dimension</option>
        {DIMENSIONS.map((dimension) => (
          <option key={dimension.text} value={dimension.text}>
            {dimension.text}
          </option>
        ))}
      </select>

      {selectedDimension && (
        <InputSet rows={selectedDimension.rows} cols={selectedDimension.columns} />
      )}
    </>
  );
};

export default Dimensions;