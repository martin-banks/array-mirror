// Data samples
const ratio = [7, 5]
const source = [
  0, 1, 2, 3, 4, 5, 6,
  7, 8, 9, 10,11,12,13,
  14,15,16,17,18,19,20,
  21,22,23,24,25,26,27,
  28,29,30,31,32,33,34,
]

// const ratio = [10, 4]
// const source = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//   10,11,12,13,14,15,16,17,18,19,
//   20,21,22,23,24,25,26,27,28,29,
//   30,31,32,33,34,35,36,37,38,39,
// ]

// const ratio = [14, 3]
// const source = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,
//   14,15,16,17,18,19,20,21,22,23,24,25,26,27,
//   28,29,30,31,32,33,34,35,36,37,38,39,40,41
// ]



const leftSideMirror = []
const rightSideMirror = []

const halfRowLeft = Math.ceil(ratio[0] / 2)
const halfRowRight = Math.floor(ratio[0] / 2)

// We know that the data represents rows and columns and how many there are of each
// Performing a loop over the number of rows, we can split the data into each row.
// These can in turn be split in half for the left and right respectively
// Now we have each half, they can be duplicated, reversed and combined with the original
// This resulting data is then pushed (with spread) into the output array
for (let row = 0; row < ratio[1]; row++) {
  // Determine the row we are operation
  const rowStart = row * ratio[0]

  // The left side data is the first half
  const leftDataSet = source.slice(
    rowStart,
    rowStart + halfRowLeft
  )
  // Right side is the second
  const rightDataSet = source.slice(
    rowStart + halfRowRight,
    rowStart + ratio[0]
  )

  // Using spread operators and slice means we are not contaminating the original data
  // And will let ups push each value into the output arrays, this is more efficient than another loop
  leftSideMirror.push(...leftDataSet)
  leftSideMirror.push(...leftDataSet.slice(0, leftDataSet.length -1).reverse())

  rightSideMirror.push(...rightDataSet.slice(1, rightDataSet.length).reverse())
  rightSideMirror.push(...rightDataSet)

  // Helps us to manually check we are serating the data correctly
  console.log({ leftDataSet, rightDataSet })
}



// Print the results
console.log(
  '\n-------------------\n',
  { leftSideMirror },
  '\n-------------------\n',
  { rightSideMirror },
  '\n-------------------\n',
)


