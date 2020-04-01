import React from "react";
import useExpanded from "./useExpanded";
import useEffectAfterMount from "./useEffectAfterMount";
import "./App.css";

const customClickHandler = () => {
  console.log("custom click handler!!!!!");
};

function App() {
  const { expanded, getTogglerProps } = useExpanded();
  useEffectAfterMount(() => {
    // user can perform any side effect here 👇
    console.log("Yay! button was clicked!!");
  }, [expanded]);
  return (
    <div style={{ marginTop: "3rem" }}>
      <button
        {...getTogglerProps({
          id: "my-btn-id",
          "aria-label": "custom toggler",
          onClick: customClickHandler
        })}
      >
        Click to view awesomeness...
      </button>
      {expanded ? <p>{"😎".repeat(50)}</p> : null}
    </div>
  );
}

export default App;
