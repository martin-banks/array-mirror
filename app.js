
const souce = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10,11,12,13,14,15,16,17,18,19,
  20,21,22,23,24,25,26,27,28,29,
  30,31,32,33,34,35,36,37,38,39,
]

const ratio = [10, 4]
const totalCells = ratio[0] * ratio[1]
const maxColumnPerSide = ratio[0] / 2

// left
const firstColumnLeft = 0
const lastColumnLeft = 0 + (ratio[0] / 2) - 1

let activeRow = 0
const leftSide = source.filter((s, i) => {
  // check and update rows
  // check which side
  // return true if left
})




// right
const firstColumnRight = ration[0] - (ratio[0] / 2)
const lastColumnRight = ratio[0] - 1

