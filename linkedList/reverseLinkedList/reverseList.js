// if we had a list of a b c d
// our goal is to have it d  c b a
// reverse linked list we just have to change the directions and the head
// previous and current will be set to null (variables)
// A would be the head
//make the current node next property point to the previous (reverses current node)
//move previous and current up by 1




const reverseList = head => {
    let previous = null;
    let current = head;

    while ( current ){ //current will be on last valid
        let temp = current.next;

        //switch directions
        current.next = previous;

        //moving current and previous up 
        previous = current;
        current = temp //above wont work unless we have this temp

    }
    return previous;

};

head = [1,2,3,4,5];


module.export = reverseList;