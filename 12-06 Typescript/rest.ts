function addNumbers(...nums: number[]): void {
  var sum: number = 0;
  nums.forEach((i: number) => {
    sum = sum + i;
  });
  console.log("Sum of ", nums, " is: ", sum);
}

addNumbers(1, 2, 3, 4, 5, 6);
addNumbers(1, 2, 3);
