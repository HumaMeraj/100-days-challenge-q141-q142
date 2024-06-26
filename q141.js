"use strict";
// Discuss the significance of the await reserved word in asynchronous JavaScript.
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchData() {
    const data = await fetchData();
    console.log(data);
}
console.log("The `await` keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
// Assuming fetchSomething returns a Promise
// The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
// This demonstrates how 'await' improves readability and flow in asynchronous code.
