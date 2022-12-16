// Creating a Binary Tree

// Create a Node of a Binary Tree
class BinaryTreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
};

// Creating the Binary Tree class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        let node = this.root;
        if (node === null) {
            this.root = new BinaryTreeNode(data);
            return;
        } else {
            const searchTree = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new BinaryTreeNode(data);
                        return;
                    } else {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new BinaryTreeNode(data);
                        return;                        
                    } else {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        if (current.data === null) {
            return null;
        }
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        if (current.data === null) {
            return null;
        }
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    isPresent(data) {
        let current = this.root;
        if (current.data === null) {
            return false;
        }
        while (current) {
            if (current.data === data) {    // Element found
                return true;                
            } 
            if (data < current.data ) {     // Left side of the tree
                current = current.left;              
            } else {                        // right side of the tree
                current = current.right;                
            }
        };
        return false;
    }

    remove(data) {
        let current = this.root;
        const removeNode = (node, data) => {
            if (node === null) {
                return null;
            }
            if (data === node.data) {           // When node matching the data found we will be removing the node and make appropriate changes
                // 1. When it has no nodes
                if (node.left === null && node.right === null) {
                    return null;
                }
                // 2. When it has 1 node (right)
                if (node.left === null) {
                    return node.right;
                }
                // 2. When it has 1 node (left)
                if (node.right === null) {
                    return node.left;
                }
                // 3. When it has 2 nodes
                let tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {      // When data is less than node
                node.left = removeNode(node.left, data);
                return node;
            } else {                            // When data is greated than node
                node.right = removeNode(node.right, data);                
                return node;
            }
        };
        this.root = removeNode(current, data)
    }

}


const bt = new BinaryTree();

bt.add(77);
bt.add(46);
bt.add(21);
bt.add(99);
bt.add(56);
bt.add(48);
bt.add(60);

console.log(bt);

bt.remove(46);
console.log(bt);


