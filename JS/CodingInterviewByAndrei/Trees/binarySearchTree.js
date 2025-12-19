// can built with library
// github.com/afiore/arboreal
class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while(currentNode){
            // left side
            if(value<currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            } else {
                if(!currentNode.right){
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
        return this;
    }
    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            // left
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value){
                currentNode = currentNode.right;
            // } else {
            //     return true;
            // }
            } else if (value === currentNode.value){
                return currentNode;
            }
        }
        return false;
    }
    remove(value){
        if(!this.root){
            return this;
        }
        let unwantedNode;
        let parentNode = null;
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value){
                // no right child
                if(currentNode.right === null){
                    if(parentNode === null){
                        this.root = currentNode.left;
                    } else {
                        // if parentNode.value > current value
                        // current left child -> a child of parent (left)
                        if(parentNode.value > currentNode.value){
                            parentNode.left = currentNode.left;
                        } else if (parentNode.value < currentNode.value){
                            // if parentNode < currentNode; 
                            // current left child -> a right child of parent
                            parentNode.right = currentNode.left;
                        }
                    }
                } else if (currentNode.right.left === null){
                    // right child does not have left child
                    if(parentNode === null){
                        this.root = currentNode.right;
                    } else {
                        currentNode.right.left = currentNode.left;
                        // if parentNode.value > current value
                        // right child of current node = left child of the parent
                        if(parentNode.value > currentNode.value){
                            parentNode.left = currentNode.right;
                        } else if (parentNode.value < currentNode.value){
                            // if parentNode < currentNode;
                            // right child of current node = right child of the parent
                            parentNode.right = currentNode.right;
                        }
                    }
                } else {
                    // right child does have a left child
                    // find the right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null){
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // parent left subtree is now leftmost right tree;
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parentNode === null){
                        this.root = leftmost;
                    } else {
                        if(parentNode.value > currentNode.value){
                            parentNode.left = leftmost;
                        } else if (parentNode.value < currentNode.value){
                            parentNode.right = leftmost;
                        }
                    }
                }
                break;
            }
        }
        return this;
    }
}

const tree = new BinarySearchTree();
console.log(tree)
console.log('insert',tree.insert(9));
console.log('insert',tree.insert(4));
console.log('insert',tree.insert(6));
console.log('insert',tree.insert(20));
console.log('insert',tree.insert(170));
console.log('insert',tree.insert(15));
console.log('insert',tree.insert(1));
// console.log('remove',tree.remove(170));
console.log('remove',tree.remove(20));
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(120));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}