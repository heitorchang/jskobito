import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Challenge from "./Challenge";
import KobitoJudge from "./KobitoJudge";
import { placeholderChallenge, challengeData } from "./challengeData";

const JsKobito = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  useEffect(() => {
    window.onerror = (err, url, line) => {
      console.log(`Error ${err}`);
      return false;
    }
  }, [])

  return (
    <Container>
      JsKobito
      {challengeData.topics.map((topic) => {
        return (
          <div key={topic.name}>
            {topic.name}
            {topic.challenges.map((challenge) => {
              return (
                <div key={challenge.id}>
                  <a onClick={() => setSelectedChallenge(challenge)}>
                    {challenge.name}
                  </a>
                </div>
              );
            })}
          </div>
        );
      })}
      <div>
        <h3>Challenge (open console to debug while it's not shown directly)</h3>
        <h3>Also, see todo.txt</h3>
        {selectedChallenge ? <Challenge challenge={selectedChallenge} /> : <></>}
      </div>
      <div>
        <KobitoJudge />
      </div>
    </Container>
  )
}

export default JsKobito;