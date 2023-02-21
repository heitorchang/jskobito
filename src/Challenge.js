import { Button } from "@mui/material";
import { useState } from "react";
import runTest from "./testRunner";

const Challenge = ({ challenge }) => {
  const [solution, setSolution] = useState("");
  const handleSolutionChange = (event) => {
    setSolution(event.target.value);
  }
  const checkSolution = () => {
    const solutionFn = eval(solution);
    const summaries = [];

    challenge.tests.forEach((test) => {
      const [passed, testResult] = runTest(test, solutionFn);
      console.log(passed);
      const label = passed ? "OK  " : "Fail";
      const readableArgs = test[0].map((e) => JSON.stringify(e)).join(", ")
      let testSummary = `${label} f(${readableArgs}) is ${JSON.stringify(test[1])}`;
      if (!passed) {
        testSummary += `, but got ${testResult}`
      }
      summaries.push(testSummary);
    })
    console.log(summaries);
    return summaries;
  }
  return (
    <div>
    <div>
      Challenge: {challenge.name}
    </div>
    <div>
      <textarea 
        value={solution} 
        rows={10} cols={80} 
        onChange={handleSolutionChange}
      />
      <br />
      <Button
        onClick={checkSolution}
      >
        Check solution
      </Button>
    </div>
    <div>
      {challenge.tests}
    </div>
    </div>
  )
}

export default Challenge;