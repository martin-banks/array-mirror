# 2D Array Mirror

This is a sandbox/challenge project in preparation for the [Camera Mirror](https://github.com/martin-banks/image-symetrifier) project where this is used to create symetrical images from a live webcam feed.


## The challenge

All of the data points on both the left and right 'sides' of the data when considered in a grid described by the ratio value need to be extracted, combined with it's own mirror annd returned as a new array.


**Notes**
- The output should cater for grids with odd and even number of columns.
- The central node should not be repeated.
- Do not assume each entry in the array will be unique.


### Example data set

```javascript
const source = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10,11,12,13,14,15,16,17,18,19,
  20,21,22,23,24,25,26,27,28,29,
  30,31,32,33,34,35,36,37,38,39,
]

// For this example we will assume this ratio:
const ratio = [10, 4]
```


### Expected output

```javascript
const leftSideMirror = [
  4,  3,  2,  1,  0,  1,  2,  3,  4,
  14, 13, 12, 11, 10, 11, 12, 13, 14,
  24, 23, 22, 21, 20, 21, 22, 23, 24,
  34, 33, 32, 31, 30, 31, 32, 33, 34
]

const rightSideMirror = [
   9,  8,  7,  6,  5,  6,  7,  8,  9,
  19, 18, 17, 16, 15, 16, 17, 18, 19,
  29, 28, 27, 26, 25, 26, 27, 28, 29,
  39, 38, 37, 36, 35, 36, 37, 38, 39
]
```





## Solution notes


### Approach

- Determine the 'side' of the grid each node is on
- Filter each node into new left and right arrays
- Split new arrays into rows for that side
- Duplicate and reverse each row and combine with it's orignal
- Merge into single array output


### How to calcualte 'position' in array matrix

To get column index for 0 based range

`(i + 1) % ColumnCount`

`(i + 1) % ratio[0]`


To get the row index, divide the index by the column count and round down

`Math.floor(i / ratio[0])`

`matrix coords = [(i + 1) % ratio[0], Math.floor(i / ratio[0])]`



### Mirroring data

In order to get a consistant mirror from the vertical centeral axis of the matrix

**Left side**; combines the original followed by the mirror

**Right side**; combines the mirrored with the original



### Odd and even column lengths

If column count is even

left side is full half (1-5)

right side is non inclusive of the left (6-10)

Each side is the same length



### Odd column counts

In order to get the central pixel, both sides must include the central node

**For left side**; Divide row length and round up `Math.ceil(ratio[0] / 2)`

**For right side**; Divide row length and round down `Math.floor(ratio[0] / 2)`




### Preventing central pixel duplicates

One of the row sets need to exclude the node in the center of the grid

For consistancy, the original data set is preserveed; the mirrored will exclude the center

This way, all manipulation is done on the same array

