import prompts from "./prompts";
// I have no edge cases handling for pop and push since its from the built in array class

class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  top() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

export default Stack;

// Shuffle method from Fisher-Yates
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

export const populateWithRandomPrompts = (level) => {
  const stack = new Stack();
  let promptsFromLevel = prompts[level];
  if (!promptsFromLevel) {
    console.error("Invalid level or no prompts available.");
    return stack;
  }
  // I may want to pass a copy instead, could use spread
  const shuffledPrompts = shuffleArray(promptsFromLevel);

  for (let i = 0; i < shuffledPrompts.length; ++i) {
    stack.push(shuffledPrompts[i]);
  }
  return stack;
};

// for getting prompts from stack
export const getPrompt = (stack) => {
  if (!stack || stack.isEmpty()) {
    return "No more prompts!";
  }
  return stack.top();
};

// Should pop outside of getPrompt
