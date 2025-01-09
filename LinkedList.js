class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  remove(value) {
    if (this.head == null) return;

    if (this.head.element === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    for (let i = 0; i <= this.size; i++) {
      const nextNode = current.next;

      if (nextNode.element === value) {
        current.next = nextNode.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  getSize() {
    console.log(this.size);
  }

  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.element);
      current = current.next;
    }
    console.log(values);
  }
}

const linkedL = new LinkedList();

linkedL.append(1);
linkedL.append(2);
linkedL.append(3);
linkedL.print();

linkedL.prepend(10);
linkedL.print();

linkedL.remove(2);
linkedL.remove(10);
linkedL.print();

linkedL.getSize();
linkedL.append(2);
linkedL.print();
