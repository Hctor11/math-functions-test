import { create } from 'zustand'

type MatrixStore = {
  matrixA: number[][],
  matrixB: number[][],
  resultMatrix: number[][],
  setMatrixA: (matrix: number[][]) => void,
  setMatrixB: (matrix: number[][]) => void,
  setResultMatrix: (matrix: number[][]) => void,
}

const useMatrixStore = create<MatrixStore>()((set) => ({
  matrixA: [],
  matrixB: [],
  resultMatrix: [],
  setMatrixA: (matrix) => set((state) => ({ matrixA: matrix })),
  setMatrixB: (matrix) => set((state) => ({ matrixB: matrix })),
  setResultMatrix: (matrix) => set((state) => ({ resultMatrix: matrix })),
}));

export default useMatrixStore;
