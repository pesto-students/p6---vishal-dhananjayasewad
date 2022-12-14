/* The left subtree of a node contains only nodes with keys less than
the node's key. Theright subtree of a node contains only nodes with
keys greater than the node's key. Boththe left and right subtrees must
also be binary search trees. */


/* Class containing left and right child of current
node and key value*/

class Node
{
	constructor(item)
	{
		this.data=item;
		this.left=this.right=null;
	}
}

    //Root of the Binary Tree

	let root;
	
	/* can give min and max value according to your code or
	can write a function to find min and max value of tree. */

	/* returns true if given search tree is binary
	search tree (efficient version) */

	function isBST()
	{
		return isBSTUtil(root, Number.MIN_VALUE,
							Number.MAX_VALUE);
	}
	
	/* Returns true if the given tree is a BST and its
	values are >= min and <= max. */

	function isBSTUtil(node,min,max)
	{
		/* an empty tree is BST */
		if (node == null)
			return true;

		/* false if this node violates
		the min/max constraints */
		if (node.data < min || node.data > max)
			return false;

		/* otherwise check the subtrees recursively
		tightening the min/max constraints */

		// Allow only distinct values
		return (isBSTUtil(node.left, min, node.data-1) &&
				isBSTUtil(node.right, node.data+1, max));
	}
	
	/*  program to test above functions */
		root = new Node(4);
		root.left = new Node(2);
		root.right = new Node(5);
		root.left.left = new Node(1);
		root.left.right = new Node(3);

		if (isBST())
			document.write("IS BST<br>");
		else
			document.write("Not a BST<br>");

    /* output = is BST*/


