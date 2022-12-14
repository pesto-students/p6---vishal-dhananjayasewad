

	var head; // head of list
	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

	function reverse(head) {
		if (head == null || head.next == null)
			return head;

		
		// reverse the rest list and put the first element at the end
		
		var rest = reverse(head.next);
		head.next.next = head;

		head.next = null;

		return rest;
	}

	/* Function to print linked list */
	function print() {
	var temp = head;
		while (temp != null) {
			document.write(temp.data + " ");
			temp = temp.next;
		}
		document.write();
	}

	function push(data) {
	var temp = new Node(data);
		temp.next = head;
		head = temp;
	}

	/* Driver program to test above function */
	
		/* Start with the empty list */

		push(20);
		push(4);
		push(15);
		push(85);

		document.write("Given linked list<br/>");
		print();

		head = reverse(head);

		document.write("<br/>Reversed Linked list<br/>");
		print();


    // output
    // Given linked list
    // 85 15 4 20 
    // Reversed linked list 
    // 20 4 15 85