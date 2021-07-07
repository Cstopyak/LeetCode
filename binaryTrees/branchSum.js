//branch sum

//sum of all the values in a particular tree
// main node is (roote node is 1)
//leaf nodes are the nodes at the bottom of the tree
// array [15, 16, 18, 10, 11]
//tree 
//       1
//    2     3
// 4    5  6  7
//8 9  10
//can solve recursively
//keep track of a running sum from nodes above at every recursive call

//ex 1 call recursive function running sum would be 0 atm


class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function branchSum(root) {
    const sums = [];
    calcBranchSum(root, 0, sums)

    return sums;

}

function calcBranchSum(node, runSum, sums) {
    if (!node) return;
    const newRunSum = runSum + node.value;
    if (!node.left && !node.right) {
        sums.push(newRunSum);
        return;

    }
    calcBranchSum(node.left, newRunSum, sums)
    calcBranchSum(node.right, newRunSum, sums)

}

