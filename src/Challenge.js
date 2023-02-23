import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { judgeState } from "./atoms/judgeState";
import { sourceCodeState } from "./atoms/sourceCodeState";
import runTest from "./testRunner";

const Challenge = ({ challenge }) => {
  const [sourceCode, setSourceCode] = useRecoilState(sourceCodeState);
  const setJudge = useSetRecoilState(judgeState);
  const [newChallengeTriggered, setNewChallengeTriggered] = useState(true);
  const handleSourceCodeChange = (event) => {
    setNewChallengeTriggered(false);
    setJudge("");
    setSourceCode(event.target.value);
  }

  const autoCheck = () => {
    const storedSourceCode = window.localStorage.getItem('jskobito_' + challenge.id) || "solution = ";
    setSourceCode(storedSourceCode);
    setNewChallengeTriggered(false);
    console.log("auto check: " + sourceCode);
    if (sourceCode !== "solution = ") {
      console.log("if stored is not blank: " + sourceCode);
      checkSolution();
    } else {
      setJudge("");
    }
  }

  useEffect(() => {
    setSourceCode("solution = ");
    setJudge("");
    setNewChallengeTriggered(true);
  }, [challenge.id]);

  useEffect(() => {
    autoCheck();
  }, [newChallengeTriggered])

  const checkSolution = () => {
    let solution = null;
    eval(sourceCode);
    const summaries = [];

    challenge.tests.forEach((test, index) => {
      const [passed, testResult] = runTest(test, solution);
      if (passed === null) {
        return false;
      }
      const label = passed ? <span style={{ color: 'green' }}>&nbsp;OK&nbsp;</span> : <span style={{ color: 'red' }}>Fail</span>;
      const readableArgs = test[0].map((e) => JSON.stringify(e)).join(", ")
      let butGotOtherResult = "";
      if (!passed) {
        butGotOtherResult = `, but got ${testResult}`
      }
      const testSummary = <div key={index}>{label} f({readableArgs}) is {JSON.stringify(test[1])} {butGotOtherResult}</div>;
      summaries.push(testSummary);
    })
    setJudge(summaries)
    window.localStorage.setItem('jskobito_' + challenge.id, sourceCode);
    return summaries;
  };

  return (
    <div>
    <div>
      Challenge: {challenge.name}
    </div>
    <div>
      {challenge.description}
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
    </div>
  )
}

export default Challenge;