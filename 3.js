// Problem 3
// Given the root to a binary tree, implement serialize(root),
// which serializes the tree into a string, and deserialize(str),
// which deserializes the string back into the tree.
//

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function serialize(node, arr) {
	if (!node) {
		arr.push('#');
		return;
	}

	// Pre-order traversal
	arr.push(node.val);
	str = serialize(node.left, arr);
	str = serialize(node.right, arr);
}

function deserialize(btAsString, i) {
	const parts = btAsString.split(',');
	const n = parts[i];
	if (n === '#') return { n: null, i: i+1 };
	const node = new Node(parseInt(n));
	
	const leftNode = deserialize(btAsString, i+1);
	node.left = leftNode.n;

	const rightNode = deserialize(btAsString, leftNode.i);
	node.right = rightNode.n;

	return { n: node, i: rightNode.i };
}

let root = new Node(100);
//root.left = new Node(90);
root.right = new Node(110);
//root.left.left = new Node(80);
//root.left.right = new Node(95);
root.right.left = new Node(105);
//root.right.right = new Node(115);

let serializedTree = [];
serialize(root, serializedTree);

const deserializedTree = deserialize(serializedTree.join(','), 0).n;

let serializedClonedTree = [];
serialize(deserializedTree, serializedClonedTree);

console.log(serializedTree.join(','));
console.log(serializedClonedTree.join(','));
