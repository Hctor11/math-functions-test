/*
The app will determine that a matrix with dimensiosn nxm will be processed as matrix [] with 
lenght of n-1 and that elements will be other matrix as a columns

for example:
a matrix of 3x2 dimensions would be [[1,0],[0,1],[1,0]]
and a matrix of 2x3 would be [[1,1,1],[0,0,0]]
*/

export interface Matrix{
    rows: number;
    columns: number;
    data: number[][];
}