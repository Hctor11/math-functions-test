/*
The dimensions type is necesary because it is useful to define the matrix type
*/

export interface Dimensions {
    rows: number;
    columns: number;
    text: string;
}

export const DIMENSIONS:Dimensions[] = [
  {
    rows: 3,
    columns: 3,
    text: "3x3"
  },
  {
    rows: 2,
    columns: 2,
    text: "2x2"
  },
  {
    rows: 2,
    columns: 3,
    text: "2x3"
  },
  {
    rows: 3,
    columns: 2,
    text: "3x2"
  }
]