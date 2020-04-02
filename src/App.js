import React from "react";
import useExpanded from "./useExpanded";
import useEffectAfterMount from "./useEffectAfterMount";
import Header from "./Component/CompoundComponent/Header";
import Icon from "./Component/CompoundComponent/Icon";
import Body from "./Component/CompoundComponent/Body";
import { longText as TermsAndConditionText } from "./Component/CompoundComponent/Utils";

import "./App.css";

const customClickHandler = () => {
  console.log("custom click handler!!!!!");
};

function App() {
  const { expanded, toggle, reset, resetDep } = useExpanded();
  useEffectAfterMount(() => {
    // user can perform any side effect here 👇
    console.log("reset was invoked!!!!");
  }, [resetDep]);
  return (
    <section className="App">
      <div className="Expandable">
        <Header toggle={toggle}> Terms and Conditions </Header>
        <Icon expanded={expanded} />
        <Body expanded={expanded}>
          {TermsAndConditionText}
          <button onClick={reset}>reset</button>
        </Body>
      </div>
    </section>
  );
}

export default App;
