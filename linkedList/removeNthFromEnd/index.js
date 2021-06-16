


function removeNthFromEnd(head, n){
    let dummyHead = {next: head};
    let slow = dummyHead;
    let fast = dummyHead;

    //move fast N nodes ahead of slow 
    for ( let i = 1; i <= n; i++){ //keep traversing a head one node at a time till its n nodes ahead of slow
        fast = fast.next;
    }

    //move slow and fast up one node at a time till fast is the last ndoe

    while(fast.next){ //while fast is not equal to last node
        slow = slow.next;
        fast = fast.next;
    } //once finishes last is at last node

    slow.next = slow.next.next;
    return dummyHead.next;


}

module.exports = removeNthFromEnd;