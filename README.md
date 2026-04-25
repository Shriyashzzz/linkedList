# Linked List

An object-oriented implementation of a linked list data structure in JavaScript.

## Why I Built This

When I started this project, I asked myself: why bother implementing a linked list when JavaScript already has arrays? Arrays are incredibly useful and give you O(1) access to any element by index. So why did I bother?

## The Problem with Arrays

While arrays are great for many use cases, I discovered they have limitations. When I tried implementing a Queue using a naive array approach, I realized that every time you dequeue an element from the front, you need to shift all remaining elements down by one index. This gives you O(n) time complexity for what should be a simple operation.

## The Linked List Solution

With a linked list, I get guaranteed O(1) time complexity for both enqueue and dequeue operations. The linked list doesn't need to shift elements around because each node simply points to the next one.

## Trade-offs I Learned

Linked lists store data in non-contiguous memory locations. This has both advantages and disadvantages depending on your use case:

**Arrays** benefit from cache locality, which can make them faster in practice even when Big O complexity is the same. They also provide instant access to any element by index.

**Linked lists** avoid the overhead of resizing and shifting elements. They provide more predictable performance for insertions and deletions at the beginning of the data structure, and constant-time operations when you already have a reference to the insertion point.

Understanding when to use each data structure could be a key to writing efficient algorithm ;)
