import BinaryTree from './binarySearchTree.js';

let newBST = new BinaryTree();
newBST.insert(4);
newBST.insert(2);
newBST.insert(5);
newBST.insert(1);
newBST.insert(3);
newBST.print();

function closestValue(tree, value){
    if(!tree.root){
        return
    }
    if(!tree.root.left && !tree.root.right){
        return tree.root;
    }
    let currNode = tree.root;
    let diff = Infinity;
    let closestNodeValue = null;
    function recursiveSearch(node, value){
        if(node === null){
            return;
        }
        if(node.data === value){
            closestNodeValue = node.data;
            return closestNodeValue;
        }
        if(node.data > value){
            // ignore the right tree
            let newDiff = node.data - value;
            if(newDiff < diff){
                diff = newDiff;
                closestNodeValue = node.data;
            }
            recursiveSearch(node.left, value);
        }
        if(node.data < value){
            let newDiff = value - node.data;
            if(newDiff < diff){
                diff = newDiff;
                closestNodeValue = node.data;
            }
            recursiveSearch(node.right, value, diff);
        }
        return closestNodeValue;
    }
    console.log(recursiveSearch(currNode, value))
    return recursiveSearch(currNode, value);
}

closestValue(newBST, 3.71223);