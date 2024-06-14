function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    nums.forEach(function (i) {
        sum = sum + i;
    });
    console.log("Sum of ", nums, " is: ", sum);
}
addNumbers(1, 2, 3, 4, 5, 6);
addNumbers(1, 2, 3);
