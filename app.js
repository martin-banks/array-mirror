// Data samples
// const ratio = [7, 5]
// const source = [
//   0, 1, 2, 3, 4, 5, 6,
//   7, 8, 9, 10,11,12,13,
//   14,15,16,17,18,19,20,
//   21,22,23,24,25,26,27,
//   28,29,30,31,32,33,34,
// ]

const ratio = [10, 4]
const source = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10,11,12,13,14,15,16,17,18,19,
  20,21,22,23,24,25,26,27,28,29,
  30,31,32,33,34,35,36,37,38,39,
]

// const ratio = [14, 3]
// const source = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,
//   14,15,16,17,18,19,20,21,22,23,24,25,26,27,
//   28,29,30,31,32,33,34,35,36,37,38,39,40,41
// ]


const leftSide = []
const rightSide = []

const leftSideRows = []
const rightSideRows = []

const leftSideMirror = []
const rightSideMirror = []

// In preparation for use on larger datasets, for loops are more performant
for (let i = 0; i < source.length; i ++) {
  const coords = [(i) % ratio[0], Math.floor(i / ratio[0])]
  if (coords[0] < Math.ceil(ratio[0] / 2)) {
    leftSide.push(source[i])
  } else {
    rightSide.push(source[i])
  }
}

// ? Creating 2d arrrays from raw 'side' data
for (let row = 0; row < ratio[1]; row++) {
  const rowStart = row * Math.ceil(ratio[0] / 2)

  const leftRowData = leftSide.slice(rowStart, rowStart + Math.ceil(ratio[0] / 2))
  leftSideRows.push(leftRowData)

  const roghtRrowData = rightSide.slice(rowStart, rowStart + Math.ceil(ratio[0] / 2))
  rightSideRows.push(roghtRrowData)
}

for (let i = 0; i < ratio[1]; i++) {
  const leftRow = leftSideRows[i]
  leftSideMirror.push(...leftRow)
  leftSideMirror.push(...leftRow.slice(0, leftRow.length -1).reverse())

  const rightRow = rightSideRows[i]
  rightSideMirror.push(...rightRow.slice(1, rightRow.length).reverse())
  rightSideMirror.push(...rightRow)
}



// Print the results
console.log(
  {
    leftSide,
    leftSideRows,
    leftSideMirror,
  },
    '\n-------------------\n',
  {
    rightSide,
    rightSideRows,
    rightSideMirror
  }
)


