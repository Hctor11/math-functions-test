import { create } from "zustand";
import type { Matrix } from "@/util/Matrix";

type MatrixStore = {
  inputA: Matrix;
  inputB: Matrix;
  operation: "sum" | "subtraction" | "multiplication" | "division" | null;
  resultMatrix: number[][];
  setMatrixA: (matrix: Matrix) => void;
  setMatrixB: (matrix: Matrix) => void;
  setResultMatrix: (matrix: number[][]) => void;
};

const useMatrixStore = create<MatrixStore>()((set) => ({
  inputA: {
    dimensions: {
      rows: 0,
      columns: 0,
      text: '0x0'
    },
    data: [[0],[0]]
  },
  inputB: {
    dimensions: {
      rows: 0,
      columns: 0,
      text: '0x0'
    },
    data: [[0],[0]]
  },
  operation: null,
  resultMatrix: [],
  setMatrixA: (input) => set((state) => ({ inputA: input})),
  setMatrixB: (input) => set((state) => ({ inputB: input })),
  setResultMatrix: (matrix) => set((state) => ({ resultMatrix: matrix })),
}));

export default useMatrixStore;
