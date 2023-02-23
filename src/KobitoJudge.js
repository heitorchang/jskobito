import { useRecoilValue } from "recoil";
import { judgeState } from "./atoms/judgeState";

const KobitoJudge = () => {
  const judge = useRecoilValue(judgeState);

  return (
    <div>
      <h3>KobitoJudge</h3>
    <pre>
      {judge}
    </pre>
    </div>
  )
};

export default KobitoJudge;