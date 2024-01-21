// we cannot add and substract matrix if they had differend dimensions
import type { Matrix } from "./Matrix"

const matrixSum = (A:Matrix, B:Matrix ) => {
    A.data.forEach((row, i) => {
        row.forEach((element, j) => {
            A.data[i][j] = element + B.data[i][j]
        })
    })
    return A
}