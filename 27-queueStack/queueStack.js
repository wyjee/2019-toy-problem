/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
 * Stack Class
 */
var Stack = function() {
  // add an item to the top of the stack
  this.storage = [];
  this.size = 0;
  this.push = function() {
    this.storage[this.size] = value;
    this.size++;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    this.storage.splice(this.size - 1, 1);
    this.size--;
  };

  // return the number of items in the stack
  this.size = function() {
    return this.size;
  };
};

/**
 * Queue Class
 */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  this.inResult = new Stack();
  this.deResult = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function() {
    // TODO: implement `enqueue`
    if (storage === "inbox") {
      this.inResult.storage.push(value);
      this.inResult.size++;
    } else if (storage === "deResult") {
      this.deResult.storage.push(value);
      this.deResult.size++;
    }
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    // TODO: implement `dequeue`
    if (storage === "inResult") {
      this.inResult.storage.splice(0, 1);
      this.inResult.size--;
    } else if (storage === "deResult") {
      this.deResult.storage.splice(0, 1);
      this.deResult.size--;
    }
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
    if (storage === "inResult") {
      return this.inResult.size;
    } else if (storage === "deResult") {
      return this.deResult.size;
    }
  };
};
