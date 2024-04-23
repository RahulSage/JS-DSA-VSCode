import java.util.*;
import java.io.*;

class Node {
    Node left;
    Node right;
    int data;

    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class Solution {

    /*
     * 
     * class Node
     * int data;
     * Node left;
     * Node right;
     */
    public static void topView(Node root) {
        Node leftNode = root.left;
        Node rightNode = root.right;
        String nodesVisited = "" + root.data;
        while (true) {
            if (leftNode == null && rightNode == null)
                break;
            if (leftNode != null) {
                nodesVisited += (" " + leftNode.data);
                leftNode = leftNode.left;
            }
            if (rightNode != null) {
                nodesVisited += (" " + rightNode.data);
                rightNode = rightNode.right;
            }
        }

        System.out.println(nodesVisited);

    }

    public static Node returnLeft(Node root) {
        return root.left;
    }

    public static Node returnRight(Node root) {
        return root.right;
    }

    public static Node insert(Node root, int data) {
        if (root == null) {
            return new Node(data);
        } else {
            Node cur;
            if (data <= root.data) {
                cur = insert(root.left, data);
                root.left = cur;
            } else {
                cur = insert(root.right, data);
                root.right = cur;
            }
            return root;
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int t = scan.nextInt();
        Node root = null;
        while (t-- > 0) {
            int data = scan.nextInt();
            root = insert(root, data);
        }
        scan.close();
        topView(root);
    }
}