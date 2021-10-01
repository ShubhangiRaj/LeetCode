class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export default class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this.root;
        }
        // if root present
        let currNode = this.root;
        // use a recursive function to find the apt node which satisfies the condition
        let resultNode = recursiveInsert(newNode, currNode);
        if(newNode.data > resultNode.data){
            resultNode.right = newNode;
            return this.root;
        }
        if(newNode.data < resultNode.data){
            resultNode.left = newNode;
            return this.root;
        }
        function recursiveInsert(newNode, currNode){
            if(newNode.data === currNode.data){
                return currNode;
            }
            if(newNode.data > currNode.data && currNode.right == null){
                return currNode;
            }
            if(newNode.data > currNode.data && currNode.right !== null){
                currNode = currNode.right;
                return recursiveInsert(newNode, currNode);
            }
            if(newNode.data < currNode.data && currNode.left == null){
                return currNode;
            }
            if(newNode.data < currNode.data && currNode.left !== null){
                currNode = currNode.left;
                return recursiveInsert(newNode, currNode);
            }
        }
    }
    search(value){
        if(!this.root){
            return false;
        }
        if(!this.root.left && !this.root.right){
            if(value = this.root.data){
                console.log('Present');
                return true;
            } else {
                console.log('Not present');
                return false;
            }
        }
        let currNode = this.root;
        let result = recursiveSearch(value, currNode);
        result ? console.log('Present') : console.log('Not present');
        return result;

        function recursiveSearch(value, currNode){
            if(currNode === null){
                return false;
            }
            if(value === currNode.data){
                return true;
            }
            if(value > currNode.data){
                currNode = currNode.right;
                return recursiveSearch(value, currNode);
            }
            if(value < currNode.data){
                currNode = currNode.left;
                return recursiveSearch(value, currNode);
            }
        }
    }
    print(){
        if(!this.root){
            return false;
        }
        let queue = [this.root];
        let visited = [];
    
        while(queue.length){
            let currentNode = queue.shift();
            visited.push(currentNode.data);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
    
        }
        console.log(visited);
    }
}

// let newBST = new BinaryTree();
// newBST.insert(10);
// newBST.insert(6);
// newBST.insert(3);
// newBST.insert(8);
// newBST.insert(20);
// newBST.insert(15);

// newBST.print();