import React, { useRef } from "react";
import useExpanded from "./useExpanded";
import useEffectAfterMount from "./useEffectAfterMount";
import Header from "./Component/CompoundComponent/Header";
import Icon from "./Component/CompoundComponent/Icon";
import Body from "./Component/CompoundComponent/Body";

import "./App.css";

const customClickHandler = () => {
  console.log("custom click handler!!!!!");
};

function App() {
  const hasViewedSecret = useRef(false);
  const { expanded, toggle, override, reset, resetDep } = useExpanded(
    false,
    appReducer
  );
  function appReducer(currentInternalState, action) {
    if (
      hasViewedSecret.current &&
      action.type === useExpanded.types.toggleExpand
    ) {
      return {
        ...action.internalChanges,
        // override internal update
        expanded: false
      };
    }
    return action.internalChanges;
  }

  useEffectAfterMount(() => {
    // open secret in new tab ð
    window.open("https://leanpub.com/reintroducing-react", "_blank");
    hasViewedSecret.current = true;
    // perform side effect here ð e.g persist user details to database
  }, [resetDep]);

  return (
    <section className="App">
      <div className="Expandable">
        <Header toggle={toggle} style={{ border: "1px dotted red" }}>
          {" "}
          They've been lying to you{" "}
        </Header>
        <Icon expanded={expanded} />
        <Body expanded={expanded} style={{ background: "papayawhip" }}>
          <p>
            This is highly sensitive information and can only be viewed ONCE!!!!
          </p>
          <p>
            Click to view the conspiracy <br />
            <button onClick={reset}> View secret </button>
          </p>
        </Body>
      </div>
      {hasViewedSecret.current && (
        <button onClick={override}>Be redeemed to view secret again</button>
      )}
    </section>
  );
}

export default App;
