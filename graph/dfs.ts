import { addEdge, displayAdjList } from './rerpresentation/ajd-list'

function dfsRec(adj: number[][],visited: boolean[], s:number, ){
    visited[s] = true
    console.log(s)
    // console.log(adj[s])
    for(const item of adj[s]){
        // console.log(item)
        if(!visited[item]){
            visited[item] = true
            dfsRec(adj, visited, item)
        }
    }

}

function dfs(adj: number[][], s:number){
    const visited = new Array(adj.length).fill(false)
    dfsRec(adj, visited, s)
}
const V = 5
let adj:number[][] = Array.from({length: 5}, ()=>[])
console.log(adj)

// Define the edges of the graph
const edges = [ [ 1, 2 ], [ 1, 0 ], [ 2, 0 ], [ 2, 3 ], [ 2, 4 ] ];

// Populate the adjacency list with edges
for (let e of edges) {
    addEdge(adj, e[0], e[1]);
}
console.log(adj)

dfs(adj, 1)

/*
addEdge(adj, 1, 0)

displayAdjList(adj)
*/
