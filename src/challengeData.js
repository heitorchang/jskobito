export const emptyChallenge = {
  id: "emptyChallenge",
  name: "Empty Challenge",
  description: "No challenge.",
  tests: [
    [[0], 0],
  ]
}
export const challengeData = {
  topics: [
    {
      name: "Arrays",
      challenges: [
        {
          // id can be anything unique, but should conventionally be topicNameChallengeName
          // "solution" function is dynamically assigned when this challenge is loaded
          id: "arraysConcatenate",
          name: "Concatenate two arrays",
          description: "Given arrays a and b, join them to form a single array, a followed by b.",
          // a test is a two-element array, where the first element is an array of arguments, and the second element is the expected result.
          tests: [
            [[[1, 2], [3, 4]], [1, 2, 3, 4]],
            [[[0], [0]], [0, 0]],
            [[[], [3]], [3]],
          ]
        },
        {
          id: "arraysGetNthElement",
          name: "Get nth element",
          description: "Given an array and an integer n, return the element at the nth position (starting from 0).",
          tests: [
            [[[1, 2, 3], 0], 1],
            [[[0, 0, 0], 1], 0],
            [[[1], 0], 1],
          ]
        }
      ]
    },
    {
      name: "Math",
      challenges: [
        {
          id: "mathAddTwo",
          name: "Add two numbers",
          description: "Given integers a and b, return a plus b.",
          tests: [
            [[1, 2], 3],
            [[1, 0], 1],
            [[10, 10], 20],
          ]
        },
        {
          id: "mathFibonacci",
          name: "Fibonacci numbers",
          description: "Return the nth Fibonacci number. fib(0) = 0 and fib(1) = 1.",
          tests: [
            [[0], 0],
            [[1], 1],
            [[2], 1],
            [[3], 2],
            [[4], 3],
            [[5], 5],
            [[6], 8],
          ]
        }
      ]
    }
  ]
}