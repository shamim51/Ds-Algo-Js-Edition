import { addEdge, displayAdjList } from "./rerpresentation/ajd-list"

console.log("hello")


let adj:number [][] = Array.from({length: 4}, () => [])

addEdge(adj, 0, 1)
addEdge(adj, 0, 3)
addEdge(adj, 1, 2)
addEdge(adj, 3, 2)
addEdge(adj, 3, 0)
addEdge(adj, 0, 2)
addEdge(adj, 1, 3)

displayAdjList(adj)