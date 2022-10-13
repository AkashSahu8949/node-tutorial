function removeEven(arr) {
    return arr.filter((v => (v % 2) != 0))
}
console.log(removeEven([3,2,41,3,34]))
