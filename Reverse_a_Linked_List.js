// Created by Paul A. Gureghian in April 2020 //
// This Javascript function reverses a linked List //

var head = [3,5,2,4];

function reverseLinkedList(head) {
    if (head == null || head.next == null) {
        return head;
    }

    const secondNode = head.next;
    const reversedTail = reverseLinkedList(secondNode);
    secondNode.next = head;
    head.next = null;

    return reversedTail;
}
    
reversedTail = reverseLinkedList(head); 
console.log(reversedTail);    


