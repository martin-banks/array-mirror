
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

// Represents the dimensions of an image
const totalCells = ratio[0] * ratio[1]



// ? How to calcualte 'position' in array matrix
// To get column index for 0 based range
// (i + 1) % ColumnCount
// (i + 1) % ratio[0]

// To get the row index
// Divide the index by the column count and round down
// Math.floor(i / ratio[0])

// matrix coords = [(i + 1) % ratio[0], Math.floor(i / ratio[0])]

const leftSide = source.filter((s, i) => {
  const coords = [(i) % ratio[0], Math.floor(i / ratio[0])]
  return coords[0] < (ratio[0] / 2)
})
// ! Expected outcome
// [
//   0, 1, 2, 3, 4, 
//   10,11,12,13,14,
//   20,21,22,23,24,
//   30,31,32,33,34,
// ]

// ? Creating 2d arrrays from raw 'side' data
const leftSideRows = []
for (let row = 0; row < ratio[1]; row++) {
  const rowStart = row * (ratio[0] / 2)
  const rowData = leftSide.slice(rowStart, rowStart + ratio[0] / 2)
  leftSideRows.push(rowData)
}

const leftSideMirror = leftSideRows
  .map(r => {
    return [...r, ...r.reverse()]
  })
  .join('\n')



const rightSide = source.filter((s, i) => {
  const coords = [(i) % ratio[0], Math.floor(i / ratio[0])]
  return coords[0] >= (ratio[0] / 2)
})
// ! Expected outcome
// [
  // 5, 6, 7, 8, 9,
  // 15,16,17,18,19,
  // 25,26,27,28,29,
  // 35,36,37,38,39,
// ]

const rightSideRows = []
for (let row = 0; row < ratio[1]; row++) {
  const rowStart = row * (ratio[0] / 2)
  const rowData = rightSide.slice(rowStart, rowStart + (ratio[0] / 2))
  rightSideRows.push(rowData)
}

const rightSideMirror = rightSideRows
  .map(r => {
    return [...r, ...r.reverse()]
  })
  .join('\n')



// Dump the results
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


