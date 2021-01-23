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

const leftSide = source.filter((s, i) => {
  const coords = [(i) % ratio[0], Math.floor(i / ratio[0])]
  return coords[0] < Math.ceil(ratio[0] / 2)
})


// ? Creating 2d arrrays from raw 'side' data
const leftSideRows = []
for (let row = 0; row < ratio[1]; row++) {
  const rowStart = row * Math.ceil(ratio[0] / 2)
  const rowData = leftSide.slice(rowStart, rowStart + Math.ceil(ratio[0] / 2))
  leftSideRows.push(rowData)
}

const leftSideMirror = leftSideRows
  .reduce((output, r) => {
    const update = output
    update.push(...r.slice(1, r.length).reverse())
    update.push(...r)
    return update
  }, [])



const rightSide = source.filter((s, i) => {
  const coords = [(i) % ratio[0], Math.floor(i / ratio[0])]
  return coords[0] >= Math.floor(ratio[0] / 2)
})

const rightSideRows = []
for (let row = 0; row < ratio[1]; row++) {
  const rowStart = row * Math.ceil(ratio[0] / 2)
  const rowData = rightSide.slice(rowStart, rowStart + Math.ceil(ratio[0] / 2))
  rightSideRows.push(rowData)
}

const rightSideMirror = rightSideRows
  .reduce((output, r) => {
    const update = output
    update.push(...r.slice(1, r.length).reverse())
    update.push(...r)
    return update
  }, [])



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


