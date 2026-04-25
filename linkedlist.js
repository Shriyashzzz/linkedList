class Node {
  constructor(data = null, next = null) {
    ((this.next = next), (this.data = data));
  }

  // help methods
  getNextData() {
    return this.next.data;
  }

  getData() {
    return this.data;
  }
}

export class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }

  append(value) {
    if (this.headNode == null && this.tailNode == null) {
      const newNode = new Node(value);
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      const newNode = new Node(value);
      this.tailNode.next = newNode;
      this.tailNode = newNode;
    }
  }

  prepend(value) {
    if (this.headNode == null && this.tailNode == null) {
      const newNode = new Node(value);
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      const newNode = new Node(value, this.headNode);
      this.headNode = newNode;
    }
  }

  size() {
    let sizeCount = 0;
    let tmpHead = this.headNode;
    while (tmpHead.next != null) {
      sizeCount++;
      tmpHead = tmpHead.next;
    }
    // +1 because the last node that stops the loop is the tail node(i.e tail node data != null)
    return sizeCount + 1;
  }

  head() {
    if (this.headNode == null && this.tailNode == null) {
      return undefined;
    } else {
      return this.headNode.getData();
    }
  }
  tail() {
    if (this.headNode == null && this.tailNode == null) {
      return undefined;
    } else {
      return this.tailNode.getData();
    }
  }

  at(index) {
    let internalIndexCount = 0;
    let tmpHead = this.headNode;
    while (internalIndexCount < index) {
      if (tmpHead.getData() != null && tmpHead.getNextData() != null) {
        tmpHead = tmpHead.next;
        internalIndexCount++;
      } else {
        return undefined;
      }
    }
    return tmpHead.getData();
  }

  pop() {
    let tmpHead = this.headNode;
    this.headNode = this.headNode.next;
    return tmpHead.getData();
  }

  contains(value) {
    let tmpHead = this.headNode;
    while (tmpHead != null) {
      if (tmpHead.getData() == value) {
        return true;
      }

      tmpHead = tmpHead.next;
    }

    return false;
  }

  findIndex(value) {
    let indexCount = 0;
    let tmpHead = this.headNode;
    while (tmpHead != null && this.tailNode.getData() != null) {
      if (tmpHead.getData() == value) {
        return indexCount;
      } else {
        indexCount++;
        tmpHead = tmpHead.next;
      }
    }
    return -1;
  }

  toString() {
    let tmpHead = this.headNode;
    let listStr = "";
    while (tmpHead !== null) {
      listStr += `( ${tmpHead.getData()} ) -> `;
      tmpHead = tmpHead.next;
    }
    listStr += `null`;
    return listStr;
  }

  insertAt(index, ...values) {
    if (index > this.size() || index < 0) {
      throw new RangeError("Index is out of bounds");
    }

    let newNodes = [];

    for (let value of values) {
      newNodes.push(new Node(value));
    }

    for (let i = 0; i < newNodes.length - 1; i++) {
      if (i < newNodes.length - 1) {
        // ensures last node next is stil pointing towards null
        newNodes[i].next = newNodes[i + 1];
      }
    }
    let inserted = false;
    let internalIndexCount = 0;
    let tmpHead = this.headNode;
    while (!inserted) {
      let nextHead = tmpHead.next;
      if (internalIndexCount == index) {
        tmpHead.next = newNodes[0];
        newNodes[newNodes.length - 1].next = nextHead;
        inserted = true;
      } else {
        tmpHead = tmpHead.next;
        internalIndexCount++;
      }
    }
  }
  removeAt(index) {
    if (index > this.size() || index < 0) {
      throw new RangeError("Index is out of bounds");
    } else {
      let removed = false;
      let prevNodeIndex = 0;
      let prevNode = this.headNode;
      let currentNode = prevNode.next;
      if (index == 0) {
        this.headNode = this.headNode.next;
      } else {
        while (!removed) {
          if (index == prevNodeIndex + 1) {
            if (index == this.size() - 1) {
              console.log("the end of the list has been called");
              this.tailNode = prevNode;
            }
            prevNode.next = currentNode.next;
            removed = true;
          } else {
            prevNode = prevNode.next;
            currentNode = currentNode.next;
            prevNodeIndex++;
          }
        }
      }
    }
  }
}

// tests
// const testLnkedLst = new LinkedList();
// testLnkedLst.append(0);
// testLnkedLst.append(1);
// testLnkedLst.append(5);
// // console.log(`there was an value ${testLnkedLst.pop(0)} at index 0`);
// // console.log(sthere is now vlaue ${testLnkedLst.at(0)}  at index 0`);
// // console.log(
// //   `it is ${testLnkedLst.contains(1)} that 1 exists in the test linked list`,
// // );
// // console.log(
// //   `it is ${testLnkedLst.contains(5)} that 1 exists in the test linked list`,
// // );
// // testLnkedLst.append(5);
// // console.log(testLnkedLst);
// // console.log(testLnkedLst.findIndex(5));

// console.log(testLnkedLst.toString());
// testLnkedLst.insertAt(1, 11, 12, 13);
// console.log(testLnkedLst.toString());
// testLnkedLst.removeAt(5);
// console.log(testLnkedLst.toString());
