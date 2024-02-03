// we cannot add and substract matrix if they had differend dimensions
import type { Matrix } from "./Matrix"
export const matrixSum = (A:Matrix, B:Matrix ) => {
    if(A.dimensions.rows!== B.dimensions.rows || A.dimensions.columns!== B.dimensions.columns){
        console.error("You cannot add or substract matrix with different dimensions")
    }

    A.data.forEach((row, i) => {
        row.forEach((element, j) => {
            A.data[i][j] = element - B.data[i][j]
        })
    })
    return A
}

const a:Matrix = {
    dimensions: {
        rows: 3,
        columns: 2,
        text: "3x2"
    },
    data: [
        [1,1],
        [2,2],
        [3,3]
    ]
}

const b:Matrix = {
    dimensions: {
        rows: 3,
        columns: 2,
        text: "3x2"
    },
    data: [
        [1,1],
        [2,2],
        [3,3]
    ]
}

console.log(matrixSum(a,b))