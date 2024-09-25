export function addEdge(adj:number[][], i:number, j:number):void{
    adj[i].push(j)
    adj[j].push(i)
}

export function displayAdjList(adj:number[][]){
    for(const item of adj){
        // console.log(item)
        for(const i of item){
            process.stdout.write(`${i} `)
        }
        console.log('\n')
    }
}
