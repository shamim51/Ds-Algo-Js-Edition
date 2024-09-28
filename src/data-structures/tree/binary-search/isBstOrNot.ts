export class Node{
    key: number
    left: Node | null
    right: Node | null

    constructor(key: number){
        this.key = key,
        this.left = null,
        this.right = null
    }
}

function isValidBst(root:Node, prev: {value: number | null}){
    if(root === null) return true
}
function isBst(root: Node){
    const prev = {value: null}
    return isValidBst(root, prev)
}


let root:Node = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

if (isBst(root)) {
    console.log("True");
} else {
    console.log("False");
}