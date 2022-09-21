import { useState } from "react";
import LifeState from "../components/LifeState";

const LifeStatePage = () => {
  const [view, setView] = useState(true);

  return(
    <div>
      {
        view ? <LifeState /> : null
      }

      <button onClick={() => {
        setView((pre) => !pre);
      }}>Change view</button>
    </div>

  )
};

export default LifeStatePage;