import { useState } from "react";
import { Container } from "@mui/system";
import Challenge from "./Challenge";
import { emptyChallenge, challengeData } from "./challengeData";

const JsKobito = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(emptyChallenge);

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
        <h3>Challenge</h3>
        <Challenge challenge={selectedChallenge} />
      </div>
    </Container>
  )
}

export default JsKobito;