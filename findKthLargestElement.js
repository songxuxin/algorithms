//the question is to find 3rd largest number in an array;
//I will write find Kth largest using quick select

var findKthLargest = function(nums, k) {
    if(nums === null || nums.length === 0 || k > nums.length) {
        return 0;
    }
    k = nums.length - k;
    let left = 0;
    let right = nums.length - 1;
    while(left < right) {
        let pi = partition(nums, left, right);
        if(pi === k) {
            break;
        } else if(pi < k) {
            left = pi + 1;
        } else {
            right = pi - 1;
        }
    }
    return nums[k];
};

var partition = function (nums, left, right) {
    let pivot = nums[right];
    //initial first higher number's index;
    let FH = left;
    for(let i = left; i < right; i++) {
        if(nums[i] < pivot) {
            swap(nums, i, FH);
            FH++;
        }
    }
    swap(nums, FH, right);
    return FH;
};

var swap = function(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 3)) //5