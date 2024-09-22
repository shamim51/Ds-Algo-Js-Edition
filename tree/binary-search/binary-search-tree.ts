export class Node{
    key: number;
    left: Node | null
    right: Node | null

    constructor(key:number){
        this.key = key,
        this.left = null,
        this.right = null
    }
}

function searchRoot(root: Node | null, key: number){
    if(root === null || root.key === key) return root

    if(root.key < key){
        return searchRoot(root.right, key)
    } 

    return searchRoot(root.left, key)
}

let root = new Node(50);
root.left = new Node(30);
root.right = new Node(70);
root.left.left = new Node(20);
root.left.right = new Node(40);
root.right.left = new Node(60);
root.right.right = new Node(80);

console.time("start")

searchRoot(root, 40) != null ? console.log("hello") : console.log("............")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")
console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")

console.log(searchRoot(root, 90) != null? "found" : "not found")
console.log(searchRoot(root, 20) != null? "found" : "not found")


console.timeEnd("start")
