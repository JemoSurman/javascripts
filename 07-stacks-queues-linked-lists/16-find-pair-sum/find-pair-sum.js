const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(nums,targetSum) {
    const doublyList = new DoublyLinkedList();
    for(const num of nums){
        let difference = targetSum - num;
        if(doublyList.contains(difference)){
            return [difference, num];
        }
        doublyList.append(num);
    }

    return null;
}

module.exports = findPairSum;
