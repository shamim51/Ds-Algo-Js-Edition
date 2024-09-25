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

function findSuccessor(root: Node):Node{
    //this line maybe be problemetic, but for now no choice but use that in this way
    if(root.right === null) return root
    //line ended
    let curr: Node = root.right
    while(curr.left != null ){ 
        curr = curr.left
    }
    console.log("successor is: ", curr)
    return curr
}

function deleteNode(root: Node | null, key: number){
    if(root === null) return root

    if(root.key > key){
        root.left = deleteNode (root.left, key)
    }
    else if(root.key < key){
        root.right = deleteNode(root.right, key)
    }else{
        if(root.left === null){
            return root.right
        }
        else if(root.right === null){
            return root.left
        }else{
            console.log("parent node is: ", root)
            const succ:Node = findSuccessor(root)
            root.key = succ.key
            root.right = deleteNode(root.right, succ.key)
        }
    }

    return root
}

function inOrder(root: Node | null){
    if(root === null) return

    inOrder(root.left)
    console.log(root.key + " ")
    inOrder(root.right)
    
}

let root: Node | null = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.right.left = new Node(12);
root.right.right = new Node(18);
let x = 15;

inOrder(root);
console.log();
root = deleteNode(root, x);
inOrder(root);