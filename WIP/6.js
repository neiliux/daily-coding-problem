// Problem 6
// An XOR linked list is a more memory efficient doubly linked list.
// Instead of each node holding next and prev fields, it holds a field named both,
// which is an XOR of the next node and the previous node.
// Implement an XOR linked list; it has an add(element) which adds the element to the end,
// and a get(index) which returns the node at index.
//

// Initial thought:
// If two numbers are XOR'd together then to extract either number 
// we must XOR the combined result with the other number.
// This means that when traversing the linked list we need to
// know the direction we are going (forward or backward) and
// we must store the address of the previous visited node as
// this is what we will XOR with our combined field to get the location
// of the next node.
//
//
//

function list() {
	let hash = {};

	const node = function(val) {
		// Since we lack pointers we will simulate pointers
		// with a unique id per node and a hash table
		// which points to each node. We will XOR
		// the IDs to get our simulated pointer references
		this.id = (new Date()).getTime();
		this.val = val;
		this.both = 0;
	}

	this.head = new node(-1);
	this.head.id = 0;
	hash[this.head.id] = this.head;

	this.tail = new node(-1);
	this.tail.id = 0;
	hash[

	this.add = val => {
	};

	this.get = index => {
	};
}

const l = new list();
l.add(10);

