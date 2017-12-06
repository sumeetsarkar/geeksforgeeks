const arr = [];

let size = arr.length;

function hasParent(i) { return parentIndex(i) >= 0; }
function hasLeftChild(i) { return leftChildIndex(i) < size; }
function hasRightChild(i) { return rightChildIndex(i) < size; }

function parent(i) { return arr[parentIndex(i)]; }
function leftChild(i) { return arr[leftChildIndex(i)]; }
function rightChild(i) { return arr[rightChildIndex(i)]; }

function parentIndex(i) { return parseInt((i - 1) / 2); }
function leftChildIndex(i) { return parseInt(2 * i + 1); }
function rightChildIndex(i) { return parseInt(2 * i + 2); }

function swap(i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function peak() {
  return arr[0];
}

function poll() {
  const item = arr[0];
  arr[0] = arr[size - 1];
  arr.pop();
  size--;
  heapifyDown();
  return item;
}

function add(item) {
  arr.push(item);
  size++;
  heapifyUp();
}

function heapifyUp() {
  let index = size - 1;
  while (hasParent(index) && parent(index) > arr[index]) {
    swap(parentIndex(index), index);
    index = parentIndex(index);
  }
}

function heapifyDown() {
  let index = 0;
  while (hasLeftChild(index)) {
    let smallerChildIndex = leftChildIndex(index);
    if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
      smallerChildIndex = rightChildIndex(index);
    }
    if (arr[index] < arr[smallerChildIndex]) {
      break;
    } else {
      swap(smallerChildIndex, index);
    }
    index = smallerChildIndex;
  }
}

add(20);
add(17);
add(15);
add(16);
add(32);
add(10);

console.log(arr);
// visualize heap
visualize();

poll();
console.log(arr);
visualize();

poll();
console.log(arr);
visualize();

function visualize() {
  arr.forEach((x, i) => console.log(`${x} -> ${leftChild(i)} , ${rightChild(i)}`) );
}
