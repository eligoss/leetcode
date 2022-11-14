/**
 * Runtime: 83  ms
 * Memory Usage: 42.6 MB
 * Link: https://leetcode.com/problems/last-stone-weight/submissions/830383561/
 * //-----------------------------------------------------------------------------
 *    1. Convert array to max heap.
 *    2. Define function that iterate over array and add items to MaxPriorityQueue;
 *    3. Call process function
 *    4.    Loop while maxHeap contains more then 1 record.
 *    5.        Get 2 biggest stones and get the difference
 *    6.        If the difference not equal 0, add it back to the heap
 *    6. Compare formatted strings
 * //-----------------------------------------------------------------------------
 /**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

    // 1. Convert array to max heap.
    const maxHeap = getMaxHeap(stones)

    // 3. Call process function
    process(maxHeap)

    // 7. Return 0 if heap is empty, return first element if contains something
    return maxHeap.isEmpty() ? 0 : maxHeap.front().element;
};

// 2. Define function that iterate over array and add items to MaxPriorityQueue;
function getMaxHeap(stones){
    let maxHeap = new MaxPriorityQueue();

    for(let stone of stones) {
        maxHeap.enqueue(stone);
    }

    return maxHeap;
}

function process(maxHeap) {

    // 4. Loop while maxHeap contains more then 1 record.
    while(maxHeap.size() > 1) {

        // 5. Get 2 biggest stones and get the difference
        let biggest = maxHeap.dequeue().element;
        let biggest2nd = maxHeap.dequeue().element;

        let difference = biggest - biggest2nd;

        // 6. If the difference not equal 0, add it back to the heap
        if(difference !== 0) {
            maxHeap.enqueue(difference);
        }
    }
}