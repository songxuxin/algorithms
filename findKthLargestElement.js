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

//if just need 3rd or 2nd largest element, no need to sort
//just keep 3 or 2 variables to memorize the 1st, 2nd, and 3rd largest elements;

var find3rdLargest = function(nums) {
    if(nums === null || nums.length < 3) {
        return;
    }
    let first = Math.max(Math.max(nums[0], nums[1]), nums[2]);
    let third = Math.min(Math.min(nums[0], nums[1]), nums[2]);
    let second = nums[0] + nums[1] + nums[2] - first - third;
    console.log("before loop: first=", first, "second=", second, "third=", third);
    for(let i = 3; i < nums.length; i++) {
        let cur = nums[i];
        if(cur >= first) {
            third = second;
            second = first;
            first = cur;
        } else if(cur >= second) {
            third = second;
            second = cur;
        } else if(cur >= third) {
            third = cur;
        }
        console.log("first=", first, "second=", second, "third=", third);
    }
    return third;
}

console.log(find3rdLargest([3,2,3,1,2,4,5,5,6])) //5

var find2ndLargest = function(nums) {
    if(nums === null || nums.length < 2) {
        return;
    }
    let first = Math.max(nums[0], nums[1]);
    let second = Math.min(nums[0], nums[1]);
    
    console.log("before loop: first=", first, "second=", second);
    for(let i = 2; i < nums.length; i++) {
        let cur = nums[i];
        if(cur >= first) {
            second = first;
            first = cur;
        } else if(cur >= second) {
            second = cur;
        } 
        console.log("i=", i, "first=", first, "second=", second);
    }
    return second;
}

console.log(find2ndLargest([3,2,3,1,2,4,5,5,6,7])) //6