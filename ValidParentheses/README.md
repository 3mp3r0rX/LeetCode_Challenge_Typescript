# Valid Parentheses

## Problem Statement

Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

### A valid input string must satisfy the following conditions:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every closing bracket has a corresponding open bracket of the same type.

### Examples

- **Example 1:**
  - **Input:** `s = "()"`  
  - **Output:** `true`

- **Example 2:**
  - **Input:** `s = "()[]{}"`  
  - **Output:** `true`

- **Example 3:**
  - **Input:** `s = "(]"`  
  - **Output:** `false`

- **Example 4:**
  - **Input:** `s = "([])"`  
  - **Output:** `true`

### Constraints

- \( 1 \leq s.length \leq 10^4 \)
- `s` consists of parentheses only '()[]{}'.