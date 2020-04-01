import React from "react";
import useExpanded from "./useExpanded";
import useEffectAfterMount from "./useEffectAfterMount";
import "./App.css";

function App() {
  const { expanded, togglerProps } = useExpanded();
  useEffectAfterMount(() => {
    // user can perform any side effect here 👇
    console.log("Yay! button was clicked!!");
  }, [expanded]);
  return (
    <div style={{ marginTop: "3rem" }}>
      <button {...togglerProps}>Click to view awesomeness...</button>
      {expanded ? <p>{"😎".repeat(50)}</p> : null}
    </div>
  );
}

export default App;
