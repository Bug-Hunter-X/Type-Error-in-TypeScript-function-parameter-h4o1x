# Type Error in TypeScript Function Parameter

This example demonstrates a common type error in TypeScript when passing an array to a function that expects a string.  The function `greeter` expects a single string, but an array of strings is provided.  TypeScript's type system correctly identifies this mismatch and throws a compilation error.

The solution shows how to correctly handle this scenario, either by modifying the function signature to accept an array or by iterating through the array and calling the function for each element.