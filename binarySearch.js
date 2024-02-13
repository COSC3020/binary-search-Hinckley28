function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midElement = list[mid];

        if (midElement === element) {
            return 0;  
        } else if (midElement < element) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
