import React from "react";
import Expandable from "./Component/CompoundComponent/Expandable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Expandable>
        <Expandable.Header
          // look here 👇
          style={{ color: "red", border: "1px solid teal" }}
        >
          Reintroducing React
        </Expandable.Header>
        <Expandable.Icon />
        <Expandable.Body>
          <img
            src="https://www.educative.io/api/collection/10370001/4597752283529216/page/5195905143668736/image/4691607934730240"
            style={{ width: "250px" }}
            alt="reintroducing react book cover"
          />
          <p style={{ opacity: 0.7 }}>
            This book is so amazing! <br />
            <a
              href="https://leanpub.com/reintroducing-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go get it now.
            </a>
          </p>
        </Expandable.Body>
      </Expandable>
    </div>
  );
}

export default App;
