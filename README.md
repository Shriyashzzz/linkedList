# Linked List

An object-oriented implementation of a linked list data structure in JavaScript.

## Features

- append(value) adds a new node containing value to the end of the list or to start if list is empty
- prepend(value) adds a new node containing value to the start of the list
- size() returns the total number of nodes in the list
- head() returns the first node in the list
- tail() returns the last node in the list
- at(index) returns the node at the given index or error message if there is no node in the requested index
- pop() removes the last element from the list
- contains(value) returns true if the passed in value is in the list and otherwise returns false
- find(value) returns the index of the node containing value, or null if not found
- toString() returns your LinkedList objects as strings in the format: ( value ) -> ( value ) -> ( value ) -> null
- insertAt(value, index) inserts a new node with the provided value at the given index or at the end of the list if index is bigger than list size
- removeAt(index) removes the node at the given index or error message if the list is empty or if the request index is bigger than list size

## Though process on building Linked List

When I started this project, I asked myself: why bother implementing a linked list when JavaScript already has arrays? Arrays are incredibly useful and give you O(1) access to any element by index. So why do I bother? Until I went through couple of videos, articles and fourms referenced in the The Odin project.

# The summary of what I learned after going through all of them:

    https://web.archive.org/web/20200217010131/http://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html
    https://dev.to/vaidehijoshi/whats-a-linked-list-anyway
    https://www.youtube.com/watch?v=oiW79L8VYXk
    https://dev.to/karimdevelops/are-linked-lists-necessary-2ckl

## The Problem with Arrays

While arrays are great for many use cases, I discovered they have limitations. When I tried implementing a Queue using a naive array approach, I realized that every time you dequeue an element from the front, you need to shift all remaining elements down by one index. This gives you O(n) time complexity for what should be a simple operation.

## The Linked List Solution

With a linked list, I get guaranteed O(1) time complexity for both enqueue and dequeue operations. The linked list doesn't need to shift elements around because each node simply points to the next one.

## Trade-offs I Learned

Linked lists store data in non-contiguous memory locations. This has both advantages and disadvantages depending on your use case:

**Arrays** benefit from cache locality, which can make them faster in practice even when Big O complexity is the same. They also provide instant access to any element by index.

**Linked lists** avoid the overhead of resizing and shifting elements. They provide more predictable performance for insertions and deletions at the beginning of the data structure, and constant-time operations when you already have a reference to the insertion point.

Understanding when to use each data structure could be a key to writing efficient algorithm ;)
