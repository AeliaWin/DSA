// Edge List
// there is a connection between 0 and 2
// there is a connection between 2 and 3
const graph =[[0,2],[2,3],[2,1],[1,3]]

// Adjacency List
// based on the index, showing the connection
// index 0, there is connection between 0 and 2
// index 1, there is a connection between 1 and (2,3) nodes
const graph1 = [[2],[2,3],[0,1,3],[1,2]]

// Adjacency Matrix
// rows and columns represent nodes
// O means there is no connection
// 1 means there is a connection
// in weighted graph, insted of using 0 and 1, 
// we can use the weight of the edge
// row 0, there is a connection between 0 and 2 noodes
// row 1, there is a connection between 1 and (2,3) nodes
const graph3 = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]

const graph4 = {
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [1,1,0,1],
    3: [0,1,1,0]
}