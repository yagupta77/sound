
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.right = null;
//         this.down = null;
//     }
// }

// Merge two sorted linked lists
// debugger
// function merge(a, b) {
//     if (!a) return b;
//     if (!b) return a;

//     let result;

//     if (a.data < b.data) {
//         result = a;
//         result.down = merge(a.down, b);
//     } else {
//         result = b;
//         result.down = merge(a, b.down);
//     }

//     return result;
// }

// // Flatten a given linked list
// function flatten(root) {
//     if (!root || !root.right) return root;

//     // Recursively flatten the right list
//     root.right = flatten(root.right);

//     // Merge this list with the flattened right list
//     root = merge(root, root.right);

//     // Return the merged list
//     return root;
// }

// // Print the flattened linked list
// function printList(node) {
//     while (node) {
//         console.log(node.data + " ");
//         node = node.down;
//     }
// }

// // Test the implementation
// let root = new Node(5);
// root.right = new Node(10);
// root.right.right = new Node(19);
// // root.right.right.right = new Node(28);

// root.down = new Node(7);
// root.down.down = new Node(8);
// root.down.down.down = new Node(30);

// root.right.down = new Node(20);

// root.right.right.down = new Node(22);
// root.right.right.down.down = new Node(50);

// root.right.right.right.down = new Node(35);
// root.right.right.right.down.down = new Node(40);
// // root.right.right.right.down.down.down = new Node(45);

// // Flatten the linked list
// root = flatten(root);

// // Print the flattened linked list
// console.log("Flattened Linked List:");
// printList(root);
const longestPalindrome = s => {
    if (s == null || s.length < 1) return "";

    let start = 0, end = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    };

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i); // For odd-length palindromes
        const len2 = expandAroundCenter(i, i + 1); // For even-length palindromes
        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};

// Test the function
const str = "baba";
console.log("Longest palindromic substring: " + longestPalindrome(str));
