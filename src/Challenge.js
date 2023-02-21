import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import runTest from "./testRunner";

const Challenge = ({ challenge }) => {
  const [sourceCode, setSourceCode] = useState("");
  const handleSourceCodeChange = (event) => {
    setSourceCode(event.target.value);
  }

  useEffect(() => {
    setSourceCode("solution = () => ")
  }, [challenge.id])

  const checkSolution = () => {
    let solution = null;
    eval(sourceCode);
    const summaries = [];

    challenge.tests.forEach((test) => {
      const [passed, testResult] = runTest(test, solution);
      console.log(passed);
      if (passed === null) {
        return false;
      }
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
        value={sourceCode} 
        rows={10} cols={80} 
        onChange={handleSourceCodeChange}
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