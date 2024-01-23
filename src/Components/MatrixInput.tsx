"use client"

import React, { useState } from "react";
import InputSet from "./InputSet";
import { DIMENSIONS } from "@/util/Dimensions";
import type { Dimensions } from "@/util/Dimensions";
import type { Matrix } from "@/util/Matrix";
import useMatrixStore from "@/Store/MatrixStore";

interface MatrixInputProps{
  title?: string;
  side: "A" | "B";
}

const MatrixInput = ({title, side}: MatrixInputProps) => {

  const [inputA, setMatrixA] = useMatrixStore((state) => [
    state.inputA,
    state.setMatrixA,
  ]);

  const [inputB, setMatrixB] = useMatrixStore((state) => [
    state.inputB,
    state.setMatrixB,
  ]);


  const handleMatrixChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const matrix = JSON.parse(value);

    if(side === "A"){
      setMatrixA(matrix);
    }else{
      setMatrixB(matrix);
    }
  };

  const [selectedDimension, setSelectedDimension] = useState<Dimensions | null>(
    {
      rows: 3,
      columns: 3,
      text: "3x3"
    }
  );

  const handleDimensionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedText = event.target.value;
    const dimension = DIMENSIONS.find((d) => d.text === selectedText) || null;
    setSelectedDimension(dimension);
  };

  return (
    <div className="flex flex-col border-2  p-2 rounded-lg w-fit">
      <label htmlFor="dimensions" className="text-sm font-bold block text-center">
      {title ? title : "Matrix"}
      </label>
      <hr className="mb-2"/>
      <select name="dimensions" id="dimensions" className="ml-1 w-fit rounded-md bg-zinc-300" onChange={handleDimensionChange}>
        {DIMENSIONS.map((dimension) => (
          <option key={dimension.text} value={dimension.text}>
            {dimension.text}
          </option>
        ))}
      </select>

      {selectedDimension && (
        <InputSet rows={selectedDimension.rows} cols={selectedDimension.columns} />
      )}
    </div>
  );
};

export default MatrixInput;