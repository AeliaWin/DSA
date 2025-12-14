function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function(boxes2) {
        console.log(boxes2);
    });
}

// Different terms for inputs
// Thus, the time complexity is O(a + b),
// where 'a' is the number of elements in the first array (boxes)
// and 'b' is the number of elements in the second array (boxes2).

// If there is nested loops,
// the time complexity would be O(a * b).