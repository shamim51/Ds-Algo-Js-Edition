class Node{
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
function insertNode(root: Node|null, key:number){
    if(root != null) console.log("root is not null")
    if(root === null){
        root = new Node(key)
        console.log("printing root inside from function: ", root)
        return root
    }
    if(key > root.key){
        root.right = insertNode(root.right, key)
    }else{
        
        root.left = insertNode(root.left, key)

    }

    return root
}

function inorder(root: Node | null) {
    if (root !== null) {
        inorder(root.left);
        console.log(root.key + " ");
        inorder(root.right);
    }
}


let root: Node|null = new Node(10)

root = insertNode(root, 15)
root = insertNode(root, 5)
root = insertNode(root, 13)
root = insertNode(root, 17)
root = insertNode(root, 18)


inorder(root)
console.log("---------------------------------")
console.log(root)

console.log(searchRoot(root, 15)!= null? "fonded": "not founded")