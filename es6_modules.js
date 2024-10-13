// JavaScript modules allow you to break up your code into separate files.

// This makes it easier to maintain the code-base.

// ES Modules rely on the import and export statements.

// Export
// You can export a function or variable from any file.
// There are two types of exports: Named and Default.

// Named Exports
// You can create named exports two ways. In-line individually, or all at once at the bottom.



// In-line individually:
person.js
export const name = "Jesse"
export const age = 40



// All at once at the bottom:

person1.js
const name = "Jesse"
const age = 40

export { name, age }