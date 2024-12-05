# JavaScript Bug: Unexpected Null Handling in Function

This repository demonstrates a common yet subtle bug in JavaScript related to unexpected behavior when a function encounters null arguments. The `foo` function is designed to add two numbers, but its handling of null values leads to unexpected results.

## Bug Description

The `foo` function returns 0 when either `a` or `b` is null. While this might seem intentional, it can mask errors and lead to unexpected results depending on the context in which the function is used.

## Solution

The improved version of the function handles null values more robustly and provides more informative feedback.
