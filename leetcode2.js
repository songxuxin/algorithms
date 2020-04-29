/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let val = 0;
    let dummy = new ListNode(0);
    let tail = dummy;

    while(l1 != null || l2 != null || val != 0) {
        if(l1 != null) {
            val += l1.val;
            l1 = l1.next;
        }

        if(l2 != null) {
            val += l2.val;
            l2 = l2.next;
        }

        tail.next = new ListNode(val % 10);
        val = parseInt(val / 10);

        tail = tail.next;
    }
    
    return dummy.next;
};