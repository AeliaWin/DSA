// Leetcode 2

class ListNode{
    constructor(val,next){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function addTwoNumbers(l1,l2){
    let carry = 0;
    let dummy = new ListNode();
    let res = dummy;
    let sum = 0;
    while(l1 || l2 || carry){
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        sum = val1 + val2 + carry;
        carry = Math.floor(sum/10);
        dummy.next = new ListNode(sum % 10);
        dummy = dummy.next;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    // console.log(currentNode);
    return res.next;
};

let l1 = new ListNode(2);
l1.next(4)
let l2 = new ListNode(5,6);
console.log(l1)
// addTwoNumbers(l1,l2);