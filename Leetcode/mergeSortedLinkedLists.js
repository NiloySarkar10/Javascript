// Sort and Merge two linkedLists into one and return the head of the merged linkedLists
// inputs: Each are of type ListNode
// list1: [1, 2, 4];
// list2: [1, 3, 4];


/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 const mergeTwoLists = function(list1, list2) {  
    let mergedList = { val: -1, next: null };
    let combinedList = mergedList;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            combinedList.next = list2;
            list2 = list2.next; 
        } else {
            combinedList.next = list1;
            list1 = list1.next; 
        }
        combinedList = combinedList.next;
    }
    combinedList.next = list1 || list2;
    return mergedList.next;
};
