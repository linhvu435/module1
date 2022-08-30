function insertNumberToArray(array, x, index,array1) {
    if (index < 0 || index > array.length) {
        alert(array);
    } else {
        for (let i = 0; i < array.length+1; i++) {
            if (i < index) {
                array1.push(array[i])
            } else {
                if (i == index) {
                    array1.push(x)
                } else {
                    array1.push(array[i - 1])
                }
            }
        }
    }
    return array1;
}